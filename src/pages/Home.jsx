import React from "react";
import { motion } from "framer-motion";
import ParticleEffect from "../components/ParticleEffect";

export default function Home() {
  return (
    <div className="home-container">
      {/* Night Sky Particle Effect */}
      <ParticleEffect />

      {/* Hero Section */}
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">I create stunning animations & experiences.</p>
      </motion.div>
    </div>
  );
}
