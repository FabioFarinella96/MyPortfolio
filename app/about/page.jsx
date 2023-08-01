"use client";

import styles from "../../styles/about.module.scss";
import Nav from "../components/nav";
import Transition from "../components/transition";
import Header from "../components/header";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaSass, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiAngularjsFill,
} from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";

export default function About() {
  const techIcons = [
    { name: "html", icon: <AiOutlineHtml5 /> },
    { name: "css", icon: <RiCss3Fill /> },
    { name: "sass", icon: <FaSass /> },
    { name: "js", icon: <RiJavascriptFill /> },
    { name: "ts", icon: <BiLogoTypescript /> },
    { name: "react", icon: <RiReactjsFill /> },
    { name: "next", icon: <TbBrandNextjs /> },
    { name: "angular", icon: <RiAngularjsFill /> },
    { name: "git", icon: <FaGitAlt /> },
  ];

  return (
    <>
      <div className={styles.About}>
        <section className={styles.container}>
          <h2 className={styles.title}>
            Pixel Perfetti: <br /> La Mia Avventura nel Mondo dello{" "}
            <span>Sviluppo Web</span>
          </h2>
          <p className={styles.text}>
            Fin da ragazzino, ho coltivato due grandi passioni: la musica e la
            tecnologia. Amo suonare la batteria e immergermi nei videogiochi. Di
            recente, ho scoperto il mondo della programmazione e, in
            particolare, lo sviluppo front end. Con il passare del tempo, questa
            nuova sfida mi sta appassionando sempre di più. Il mio percorso nel
            campo dello sviluppo web ha avuto inizio frequentando un corso di
            formazione, dove ho acquisito le basi fondamentali. Tuttavia, la mia
            sete di conoscenza mi ha spinto a continuare ad apprendere
            autonomamente, scoprendo nuove tecnologie e affrontando stimolanti
            progetti sia da solo che collaborando con altre persone. Sono una
            persona estremamente curiosa e sempre alla ricerca di nuovi stimoli.
          </p>
        </section>
        <section className={styles.viewContainer}>
          <div className={styles.skillsContainer}>
            <h2 className={styles.skillsTitle}>Stack Tecnologico</h2>
            <div className={styles.techIcons__container}>
              {techIcons.map((icon, index) => (
                <span key={index} className={styles.techIcon}>
                  {icon.icon}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.img}>
            <Image
              className={styles.pcImg}
              src={"/avatar.png"}
              width={300}
              height={300}
              alt="Avatar Image"
            />
          </div>
          <div className={styles.img2}>
            <Image
              className={styles.pcImg2}
              src={"/assets/pc.jpg"}
              width={300}
              height={300}
              alt="pc Image"
            />
          </div>
        </section>
        <Header />
        <Transition />
        <Nav />
      </div>
    </>
  );
}
