/*
| Developed by Reskue
| Filename: Curssor.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { RefObject, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import style from "@/styles/Curssor.module.css";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CurssorProps {
  children?: React.ReactNode;
  element?: RefObject<HTMLElement>;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Curssor: React.FC<CurssorProps> = (props) => {
  const { element } = props;
  const [cursorVariants, setCursorVariants] = useState<"default" | "changed">(
    "default"
  );
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const variants: Variants = {
    default: {
      x: position.x - 6,
      y: position.y - 6,
      backgroundColor: "#fcf7f1",
      mixBlendMode: "difference",
    },
    changed: {
      width: 80,
      height: 80,
      x: position.x - 40,
      y: position.y - 40,
      backgroundColor: "#fcf7f1",
      mixBlendMode: "difference",
    },
  };

  // useEffect
  //--------------------------------------------------------------------------
  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    element?.current?.addEventListener("mouseenter", () => {
      setCursorVariants("changed");
    });
    element?.current?.addEventListener("mouseleave", () => {
      setCursorVariants("default");
    });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.div
      className={style.curssor}
      variants={variants}
      animate={cursorVariants}
    />
  );
};
