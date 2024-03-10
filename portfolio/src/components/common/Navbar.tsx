/*
| Developed by Reskue
| Filename: Navbar.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/
import React from "react";
import styles from "@/styles/Navbar.module.css";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const navItems = [
  { name: "Work *", link: "/work" },
  { name: "About *", link: "/about" },
  { name: "Contact *", link: "/contact" },
];
export const Navbar: React.FC = (props) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.nav
      className={styles.container}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
    >
      <p>Logo</p>
      <p className={styles.location}>Based in Paris</p>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <motion.span
              whileHover={{
                y: -20,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            >
              <span>{item.name}</span>
              <br />
              <span>{item.name}</span>
            </motion.span>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
