"use client";

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Générer des étoiles aléatoires
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    // Générer des météores
    const generateMeteors = () => {
      const newMeteors = [];
      for (let i = 0; i < 5; i++) {
        newMeteors.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
        });
      }
      setMeteors(newMeteors);
    };

    generateStars();
    generateMeteors();

    // Régénérer les météores périodiquement
    const meteorInterval = setInterval(generateMeteors, 4000);
    return () => clearInterval(meteorInterval);
  }, []);

  // Styles sombres pour les étoiles
  const getStarStyle = (star) => ({
    left: `${star.x}%`,
    top: `${star.y}%`,
    width: `${star.size}px`,
    height: `${star.size}px`,
    animationDelay: `${star.delay}s`,
    backgroundColor: 'white',
    boxShadow: `0 0 ${star.size * 2}px white, 0 0 ${star.size * 4}px rgba(255, 255, 255, 0.5)`,
  });

  // Styles sombres pour les météores
  const getMeteorStyle = (meteor) => ({
    left: `${meteor.x}%`,
    top: `${meteor.y}%`,
    animationDelay: `${meteor.delay}s`,
    background: 'linear-gradient(45deg, #0ea5e9, transparent)',
    boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
  });

  return (
    <div className="stars">
      {/* Étoiles */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={getStarStyle(star)}
        />
      ))}

      {/* Météores */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={getMeteorStyle(meteor)}
        />
      ))}
    </div>
  );
}