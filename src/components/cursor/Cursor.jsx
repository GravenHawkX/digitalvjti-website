import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: [position.x],
      y: [position.y],
      transition: { duration: 0.2 },
    });
  }, [position, controls]);

  return (
    <motion.div
      className="cursor"
      animate={controls}
    ></motion.div>
  );
};

export default Cursor;
