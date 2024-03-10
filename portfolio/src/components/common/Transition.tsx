/*
| Developed by Reskue
| Filename: Transition.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { Dispatch, SetStateAction } from "react";
import { motion, stagger } from "framer-motion";
import style from "@/styles/Transition.module.css";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
interface TransitionProps {
  animationComplete?: Dispatch<SetStateAction<boolean>>;
}
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Transition: React.FC<TransitionProps> = ({
  animationComplete,
}) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <>
      <motion.div
        className={style.in}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.25, 1, 0.45, 1],
          staggerChildren: 0.5,
        }}
      />
      <motion.div
        className={style.out}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.45, 1] }}
        onAnimationComplete={() => animationComplete && animationComplete(true)}
      />
    </>
  );
};
