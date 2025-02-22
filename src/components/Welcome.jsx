import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Fireworks from "./Fireworks";
import "../styles/welcome.css";

export default function WelcomeMessage() {
  const [show, setShow] = useState(true);
  const [fireworks, setFireworks] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const rocketY = useTransform(count, [0, 100], [0, -500]); 

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });

    const timer = setTimeout(() => {
      setFireworks(true);

      setTimeout(() => {
        setShow(false);
        setFireworks(false);
      }, 1000);
    }, 5000);

    return () => {
      clearTimeout(timer);
      controls.stop();
    };
  }, [count]);

  if (!show) return null;

  return (
    <>
      <motion.div
        className="welcome-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: fireworks ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <div className="welcome-content">
          <h1>Welcome to My Portfolio</h1>
          <motion.pre style={text}>{rounded}</motion.pre>

          <motion.img
            src="/rocket1.png"
            alt="Rocket"
            className="rocket"
            style={{ y: rocketY}}
          />
        </div>
      </motion.div>

      {fireworks && <Fireworks show={fireworks} />}
    </>
  );
}

/**
 * ==============   Styles   ================
 */
const text = {
  fontSize: 64,
  color: "#4ff0b7",
};
