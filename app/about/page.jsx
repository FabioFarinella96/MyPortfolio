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
            Dalla Passione al Professionismo: Creo <span> Siti Web</span> Che
            Comunicano
          </h2>
          <p className={styles.text}>
            Sono un front end developer con una forte passione per il design e
            l’usabilità. Oggi mi occupo di aiutare liberi professionisti,
            aziende e brand a creare siti vetrina efficaci e landing page ad
            alto impatto, pensati per raccontare al meglio i loro servizi. Mi
            aggiorno costantemente sulle tecnologie più moderne e curo ogni
            dettaglio, dalla struttura alla grafica, per offrire soluzioni
            personalizzate e performanti.
          </p>
          <p className={styles.text}>
            Che tu abbia bisogno di
            <b> lanciare un nuovo prodotto </b> o
            <b> presentare la tua attività sul web </b>, sono qui per
            trasformare le tue idee in una
            <b> presenza online </b>
            concreta e professionale.
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
