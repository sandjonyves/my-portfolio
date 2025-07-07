"use client";

import { motion } from "framer-motion";

const Badge = ({ 
  children, 
  variant = "default",
  size = "md",
  className = "",
  animated = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full border transition-all duration-300";
  
  const variants = {
    default: "bg-slate-700/50 text-slate-300 border-slate-600",
    primary: "bg-sky-400/20 text-sky-300 border-sky-400/30 hover:bg-sky-400/30",
    success: "bg-green-500/20 text-green-300 border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    error: "bg-red-500/20 text-red-300 border-red-500/30",
    purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    tech: "bg-slate-800/50 text-yellow-200 border-slate-700/50 hover:bg-slate-700/50"
  };
  
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base"
  };

  const badgeClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (animated) {
    return (
      <motion.span
        className={badgeClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge; 