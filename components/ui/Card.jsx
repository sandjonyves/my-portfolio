"use client";

import { motion } from "framer-motion";

const Card = ({ 
  children, 
  variant = "default",
  className = "", 
  hover = true,
  glow = false,
  onClick,
  ...props 
}) => {
  const baseClasses = "relative rounded-lg transition-all duration-300";
  
  const variants = {
    default: "bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-sky-400/50",
    glass: "bg-slate-900/40 backdrop-blur-md border border-slate-600/30 hover:border-sky-400/30",
    terminal: "bg-slate-950/80 border border-slate-700/50 font-mono",
    project: "bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-sky-400/50 shadow-lg hover:shadow-sky-400/20"
  };

  const cardClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const CardContent = (
    <motion.div
      className={cardClasses}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {glow && (
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );

  if (glow) {
    return (
      <div className="group">
        {CardContent}
      </div>
    );
  }

  return CardContent;
};

export default Card; 