import React, { useState, useRef } from "react";
import Head from "next/head";
import { Transition } from "@/components/common/Transition";
import { Curssor } from "@/components/common/Curssor";
import { Navbar } from "@/components/common/Navbar";
import { Intro } from "@/components/pages/home/Intro";

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

export default function Home() {
  const [cursorMoved, setCursorMoved] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const titleRef = useRef<HTMLElement>(null);

  return (
    <>
      <Head>
        <title>Portfolio ~ Hasni</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {animationComplete && <Navbar />}
      <Intro
        ref={titleRef as React.ForwardedRef<HTMLHeadingElement>}
        animationComplete={animationComplete}
        handleMouseMove={() => {
          if (!cursorMoved) setCursorMoved(true);
        }}
      />
      {animationComplete && cursorMoved ? <Curssor element={titleRef} /> : null}
      <Transition animationComplete={setAnimationComplete} />
    </>
  );
}
