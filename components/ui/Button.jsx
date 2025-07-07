"use client";

import { motion } from "framer-motion";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  className = "", 
  disabled = false,
  icon,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:from-sky-500 hover:to-blue-700 shadow-lg hover:shadow-sky-400/25",
    secondary: "bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600",
    outline: "bg-transparent text-sky-400 border-2 border-sky-400 hover:bg-sky-400 hover:text-white",
    ghost: "bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white",
    space: "space-button group relative inline-flex items-center justify-center text-white rounded-full transition-all duration-300 overflow-hidden"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-4 text-xl"
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (variant === "space") {
    return (
      <motion.button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button; 