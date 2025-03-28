import { Router } from "express";
import prisma from "../config/database.js";

const router = Router();

router.get("/verify-email", async (req: any, res: any) => {
  const { email, token } = req.query;

  if (email && token) {
    const user = await prisma.user.findUnique({
      where: {
        email: email as string,
      },
    });

    if (user) {
      if (token === user.email_verified_token) {
        //Redirect to the dashboard &&
        //update the token as null so that same token is not used for several times
        await prisma.user.update({
          data: {
            email_verified_token: null,
            email_verified_at: new Date().toISOString(),
          },
          where: { email: email as string },
        });
        return res.redirect(`${process.env.CLIENT_URL}/login`);
      }
    }
  }
  return res.redirect("/verify-error");
});

router.get("/verify-error", async (req: any, res: any) => {
  return res.render("auth/emailVerifyError");
});

export default router;
