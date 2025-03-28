import { Router, Request, Response } from "express";
import { loginSchema, registerSchema } from "../validator/authValidations.js";
import bcrypt from "bcrypt";
import { ZodError } from "zod";
import { formatError } from "../helper.js";
import prisma from "../config/database.js";
import { v4 as uuidv4 } from "uuid";
import { renderEmailEjs } from "../helper.js";
import { emailQueue, emailQueueName } from "../jobs/EmailJob.js";
import jwt from "jsonwebtoken";
import { name } from "ejs";

const router = Router();

// Login route

router.post("/login", async (req: any, res: any) => {
  try {
    const body = req.body;
    const payload = loginSchema.parse(body);

    //Check email existance
    let user = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (!user || user == null) {
      return res.status(422).json({
        errors: {
          email: "No user found with this email ID.",
        },
      });
    }

    //Check password
    const comparePassword = await bcrypt.compare(
      payload.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(422).json({
        errors: {
          password: "Invalid credentials.",
        },
      });
    }

    //JWT Payload
    let JWTPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const token = jwt.sign(JWTPayload, process.env.SECRET_KEY!, {
      expiresIn: "365d",
    });

    return res.json({
      message: "Logged in successfully.",
      data: {
        ...JWTPayload,
        token: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formatError(error);
      return res.status(422).json({
        message: "Invalid data",
        errors,
      });
    }
    return res.status(500).json({ message: "Something went wrong." });
  }
});

// Register route
router.post("/register", async (req: any, res: any) => {
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
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formatError(error);
      return res.status(422).json({
        message: "Invalid data",
        errors,
      });
    }
    return res.status(500).json({ message: "Something went wrong." });
  }
});

export default router;
