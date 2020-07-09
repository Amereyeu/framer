import React from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

function NavList({ toggle }) {
  const itemIds = [0, 1];

  const navListVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.ul className="navigation__list" variants={navListVariants}>
      {itemIds.map((i) => (
        <div onClick={toggle} key={i}>
          <NavItem i={i} />
        </div>
      ))}
    </motion.ul>
  );
}

export default NavList;
