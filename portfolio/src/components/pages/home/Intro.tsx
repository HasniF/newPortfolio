/*
| Developed by Reskue
| Filename: Intro.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { forwardRef } from "react";
import styles from "@/styles/Home.module.css";
import { LetterMotion } from "@/components/common/LetterMotion";
/*
|--------------------------------------------------------------------------
| Interfaces
|--------------------------------------------------------------------------
*/
interface IntroProps {
  animationComplete: boolean;
  handleMouseMove: () => void;
}
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Intro = forwardRef<HTMLHeadingElement, IntroProps>(
  (props, ref) => {
    const { animationComplete, handleMouseMove } = props;
    // Render
    //--------------------------------------------------------------------------
    return (
      <div className={styles.container} onMouseMove={handleMouseMove}>
        {animationComplete && (
          <h1 className={styles.title} ref={ref}>
            <span className={styles.hide}>
              {"Frontend".split("").map((letter, index) => (
                <LetterMotion key={index} index={index} letter={letter} />
              ))}
            </span>
            <br />
            <span className={styles.hide}>
              {"Developer".split("").map((letter, index) => (
                <LetterMotion key={index} index={index} letter={letter} />
              ))}
            </span>
          </h1>
        )}
      </div>
    );
  }
);
