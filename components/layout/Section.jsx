"use client";

import { motion } from "framer-motion";

const Section = ({ 
  id,
  children, 
  className = "",
  background = "default",
  padding = "py-20",
  container = true,
  maxWidth = "max-w-7xl",
  animate = true,
  ...props 
}) => {
  const backgrounds = {
    default: "bg-slate-900",
    dark: "bg-slate-800/50",
    glass: "bg-slate-900/40 backdrop-blur-md",
    space: "space-bg"
  };

  const sectionClasses = `${backgrounds[background]} ${padding} ${className}`;

  const SectionContent = (
    <motion.section
      id={id}
      className={sectionClasses}
      initial={animate ? { opacity: 0, y: 20 } : {}}
      whileInView={animate ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {container ? (
        <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
          {children}
        </div>
      ) : (
        children
      )}
    </motion.section>
  );

  return SectionContent;
};

export default Section; 