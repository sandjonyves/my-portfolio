"use client";

import { useState, useEffect } from "react";

const Typewriter = ({ 
  words, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = "",
  cursorClassName = "animate-pulse"
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentIndex];
    
    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }
  }, [currentText, currentIndex, isDeleting, words, speed, deleteSpeed, pauseTime]);

  return (
    <div className={`flex items-center justify-center lg:justify-start ${className}`}>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-sky-300">
        {currentText}
        <span className={cursorClassName}>|</span>
      </h3>
    </div>
  );
};

export default Typewriter; 