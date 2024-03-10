/*
| Developed by Reskue
| Filename: LetterMotion.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface LetterMotionProps {
  children?: React.ReactNode;
  letter: string;
  index: number;
}

/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const variants = {
  visible: { y: 200 },
  animate: { y: 0 },
  transition: {
    duration: 1.5,
    ease: [0.075, 0.82, 0.165, 1],
  },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const LetterMotion: React.FC<LetterMotionProps> = (props) => {
  const { letter, index } = props;
  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.span
      key={index}
      initial={variants.visible}
      animate={variants.animate}
      transition={{ ...variants.transition, delay: index * 0.1 }}
    >
      {letter}
    </motion.span>
  );
};
