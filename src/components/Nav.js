import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import useDimensions from "./use-dimensions";
import NavToggle from "./NavToggle";
import NavList from "./NavList";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const wrapVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 3.8,
        duration: 2
      },
    },
  };

  const navigationVariants = {
    open: (height = 300) => ({
      clipPath: `circle(${height * 2}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(25px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="navigation-wrap"
      variants={wrapVariants}
      initial="initial"
      animate="animate"
    >
      <motion.nav
        className="navigation"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="navigation__background"
          variants={navigationVariants}
        />
        <NavList toggle={toggleNavigation} />
        <NavToggle toggle={toggleNavigation} />
      </motion.nav>
    </motion.div>
  );
}

export default Nav;
