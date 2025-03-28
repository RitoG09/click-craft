import { Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: any, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader == null || authHeader == undefined) {
    return res.status(401).json({ status: 401, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1]; // spliting bearer and actual token

  jwt.verify(token, process.env.SECRET_KEY!, (err, user) => {
    if (err)
      return res.status(401).json({ status: 401, message: "Unauthorized" });
    req.user = user as authUser;
    next();
  });
};
