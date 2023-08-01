"use client";

import styles from "./page.module.scss";

// components
import Header from "./components/header";
import Hero from "./components/hero";
import Nav from "./components/nav/Nav";
import Transition from "./components/transition";
import Image from "next/image";

// framer motion
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <main className={styles.main}>
        <Transition />
        <Header />
        <Hero />
        <Image
          priority
          className={styles.avatar}
          src="/avatar.png"
          width={450}
          height={450}
          alt="shape"
        />
        <Nav />
      </main>
    </AnimatePresence>
  );
}
