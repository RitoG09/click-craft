import { Router } from "express";
import { registerSchema } from "../validator/authValidations.js";
import bcrypt from "bcrypt";
import { ZodError } from "zod";
import { formarError } from "../helper.js";
import prisma from "../config/database.js";
import { v4 as uuidv4 } from "uuid";
import { renderEmailEjs } from "../helper.js";
import { emailQueue, emailQueueName } from "../jobs/EmailJob.js";
const router = Router();
router.post("/register", async (req, res) => {
    try {
        const body = req.body;
        const payload = registerSchema.parse(body);
        let user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            },
        });
        if (user) {
            return res.status(422).json({
                errors: {
                    email: "Email is already taken. Please use another email",
                },
            });
        }
        //Encryt password using bcrypt
        const salt = await bcrypt.genSalt(10);
        payload.password = await bcrypt.hash(payload.password, salt);
        //Generate token for {email_verified_token}
        const token = await bcrypt.hash(uuidv4(), salt);
        const url = `${process.env.APP_URL}/verify-email?email=${payload.email}&token=${token}`;
        const emailBody = await renderEmailEjs("verify-email", {
            name: payload.name,
            url: url,
        });
        //Send email
        await emailQueue.add(emailQueueName, {
            to: payload.email,
            subject: "Thumbnail Email Verification",
            body: emailBody,
        });
        //store the user in the db
        await prisma.user.create({
            data: {
                name: payload.name,
                password: payload.password,
                email: payload.email,
                email_verified_token: token,
            },
        });
        return res.json({
            message: "Check your email, we have sent you an email",
        });
    }
    catch (error) {
        if (error instanceof ZodError) {
            const errors = formarError(error);
            return res.status(422).json({
                message: "Invalid data",
                errors,
            });
        }
        return res.status(500).json({ message: "Something went wrong." });
    }
});
export default router;
