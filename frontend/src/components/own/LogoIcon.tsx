import React from "react";
import { motion } from "framer-motion";

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-primary rounded-lg text-primary-foreground flex items-center justify-center font-bold ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="m19 12-7-5-7 5"></path>
      </svg>
    </motion.div>
  );
};

export default LogoIcon;
