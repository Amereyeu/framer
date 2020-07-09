import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavItem({ i }) {
  const linkText = ["Home", "About"];
  const links = ["/", "/about"];

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.li
      className="navigation__list__item"
      variants={variants}
      whileHover={{ scale: 1.3, originX: 0 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className="navigation__list__item__link"
        to={`${links[i]}`}
      >
        <span>{linkText[i]}</span>
      </Link>
    </motion.li>
  );
}

export default NavItem;
