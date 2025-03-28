import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LogoIcon from "./LogoIcon";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  alternateText: string;
  alternateLink: string;
  alternateLinkText: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  alternateText,
  alternateLink,
  alternateLinkText,
}) => {
  return (
    <div className="flex min-h-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <LogoIcon className="h-12 w-12" />
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-6 text-3xl font-bold tracking-tight text-foreground"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-2 text-sm text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8"
        >
          <div className="glass-effect p-8 rounded-xl shadow-sm">
            {children}
          </div>
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">{alternateText}</span>{" "}
            <Link
              href={alternateLink}
              className="font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {alternateLinkText}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
