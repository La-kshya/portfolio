import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Fireworks({ show }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  if (!show) return null; 

  return (
    <Particles
      id="fireworks"
      init={particlesInit}
      options={{
        fullScreen: { zIndex: 10 }, // Make sure it appears above the rocket
        particles: {
          number: { value: 0 }, // Start with zero particles
          shape: { type: "circle" },
          size: { value: { min: 3, max: 6 }, random: true },
          move: { enable: true, speed: 10 },
          color: { value: ["#ff0000", "#ffff00", "#ff6600", "#ffffff"] }, // Fireworks colors
          opacity: {
            value: 1,
            animation: { enable: true, speed: 0.5, minimumValue: 0.3 },
          },
        },
        emitters: [
          {
            position: { x: 50, y: 90 }, // Fireworks start from bottom
            rate: { quantity: 5, delay: 0.1 },
            particles: {
              move: { direction: "top", speed: { min: 20, max: 40 } },
              size: { value: { min: 3, max: 8 } },
              opacity: { value: { min: 0.3, max: 1 } },
              life: { duration: 1, count: 1 },
            },
          },
        ],
        detectRetina: true,
      }}
    />
  );
}
