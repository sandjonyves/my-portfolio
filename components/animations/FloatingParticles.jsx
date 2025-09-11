"use client";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const FloatingParticlesComponent = ({
  count = 8,
  className = "",
  color = "bg-sky-400",
  size = "w-2 h-2",
  duration = 3,
  delay = 0
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${size} ${color} rounded-full`}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0
          }}
          animate={{
            y: [null, "-20px", "20px"],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: duration,
            delay: delay + (i * 0.2),
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Export avec dynamic import
const FloatingParticles = dynamic(() => Promise.resolve(FloatingParticlesComponent), {
  ssr: false,
  loading: () => <div className="absolute inset-0 pointer-events-none" />
});

export default FloatingParticles;