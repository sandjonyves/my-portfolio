"use client";

import { motion } from "framer-motion";

const Textarea = ({ 
  label,
  name,
  placeholder = "",
  value,
  onChange,
  error,
  required = false,
  rows = 4,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      className={`space-y-2 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-slate-300"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <motion.textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`
          w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg
          text-slate-100 placeholder-slate-400 resize-none
          focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent
          transition-all duration-300
          ${error ? 'border-red-400 focus:ring-red-400' : ''}
        `}
        whileFocus={{ scale: 1.02 }}
        {...props}
      />
      
      {error && (
        <motion.p
          className="text-red-400 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Textarea; 