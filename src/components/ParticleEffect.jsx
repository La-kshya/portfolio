import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleEffect() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { zIndex: -1 },
        background: { color: "#010A26" },
        particles: {
          number: {
            value: 600,
            density: { enable: true, area: 1000 },
          },
          color: { value: "#ffffff" },
          opacity: {
            value: 0.8,
            random: true,
            animation: { enable: true, speed: 0.5, minimumValue: 0.3 },
          },
          size: { value: { min: 1, max: 3 }, random: true },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["repulse","grab"] }, // Moves stars away from cursor
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 20, lineLinked: { opacity: 0.3 } },
            repulse: {
              distance: 50, 
              duration: 0.4, 
            },
            push: { quantity: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
