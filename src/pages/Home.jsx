import React from "react";
import { motion } from "framer-motion";
import ParticleEffect from "../components/ParticleEffect";
import "../styles/home.css";


export default function Home() {
  return (
    <div className="home-container">
      {/* Night Sky Particle Effect */}
      <ParticleEffect />

      {/* Hero Section */}
      <motion.div 
        className="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p >I create stunning animations & experiences.</p>
      </motion.div>
    </div>
  );
}
