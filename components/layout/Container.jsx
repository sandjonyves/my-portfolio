"use client";

import { motion } from "framer-motion";

const Container = ({ 
  children, 
  className = "",
  maxWidth = "max-w-7xl",
  padding = "px-4 sm:px-6 lg:px-8",
  animate = false,
  ...props 
}) => {
  const containerClasses = `${maxWidth} mx-auto ${padding} ${className}`;

  if (animate) {
    return (
      <motion.div
        className={containerClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

export default Container; 