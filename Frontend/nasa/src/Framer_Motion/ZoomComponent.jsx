import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ZoomComponent = (Component) => {
  return function ZoomedComponent() {
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
    const [translateX, setTranslateX] = useState(0);
    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { offsetWidth, offsetHeight } = currentTarget;

      const rotateY = (clientX / offsetWidth) * 30 - 15; // Rotate within [-15, 15]
      const rotateX = (clientY / offsetHeight) * 30 - 15; // Rotate within [-15, 15]

      setRotation({ rotateX, rotateY });

      const translateXValue = (clientX / offsetWidth) * 50 - 25; // Translate within [-25, 25]
      setTranslateX(translateXValue);
      console.log(translateX);
    };

    return (
      <motion.div
        onMouseMove={handleMouseMove} // Call the mouse move event to handle rotation
        initial={{
          scale: 1.5,
          opacity: 0,
          translateX: 0,
        }} // Start zoomed in
        animate={{
          scale: 1,
          opacity: 1,
        }} // Zoom out to normal
        exit={{
          scale: 1.5, // Scale down during exit
          opacity: 0,
          transition: {
            duration: 2, // Duration of exit transition
            ease: [0.22, 1, 0.36, 1], // Easing function for smooth exit
          },
        }} // Zoom out on exit
        style={{
          backgroundColor: "aliceblue",
          width: "100%",
          height: "100%",
          overflow: "hidden", // Hide overflow
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
          }}
          transition={{
            duration: 2,
            ease: [0.77, 1, 0.36, 1],
          }}
        >
          <Component />
        </motion.div>
      </motion.div>
    );
  };
};

export default ZoomComponent;
