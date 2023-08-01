"use client";

import styles from "../../styles/works.module.scss";
import Nav from "../components/nav";
import Transition from "../components/transition";
import Header from "../components/header";
import { RiExternalLinkLine } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const projects = [
  {
    name: "EventHub",
    image: "/assets/projectsImages/1.png",
    link: "https://project-cb6-terence-hill.vercel.app/",
  },
  {
    name: "GamesCenter",
    image: "/assets/projectsImages/3.png",
    link: "https://github.com/FabioFarinella96/GamesCenter",
  },
  {
    name: "Current Weather App",
    image: "/assets/projectsImages/5.png",
    link: "https://github.com/FabioFarinella96/CurrentWeatherApp-Angular",
  },
  {
    name: "Iphone Calculator Clone",
    image: "/assets/projectsImages/4.png",
    link: "https://github.com/FabioFarinella96/Iphone-Calculator-Clone",
  },
  {
    name: "Taskify",
    image: "/assets/projectsImages/6.png",
    link: "https://github.com/FabioFarinella96/React-Typescript-TodoList",
  },
  {
    name: "CocktailHouse",
    image: "/assets/projectsImages/7.png",
    link: "https://github.com/FabioFarinella96/cocktail-app",
  },
  {
    name: "All you can find e-commerce",
    image: "/assets/projectsImages/8.png",
    link: "https://github.com/FabioFarinella96/e-commerce",
  },
  {
    name: "Il prodotto che cerchi",
    image: "/assets/projectsImages/9.png",
    link: "https://github.com/FabioFarinella96/IlProdottoCheCerchi",
  },
  {
    name: "Buy&Rent",
    image: "/assets/projectsImages/2.png",
    link: "https://github.com/FabioFarinella96/BuyAndRent",
  },
  {
    name: "My old Portfolio",
    image: "/assets/projectsImages/10.png",
    link: "https://github.com/FabioFarinella96/Portfolio",
  },
];

export default function Works() {
  return (
    <div className={styles.Works}>
      <h1 className={styles.title}>Progetti</h1>
      <p className={styles.text}>
        Di seguito alcuni dei progetti sviluppati durante il mio percorso.
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.mySwiper}
      >
        {projects.map((project, index) => (
          <SwiperSlide className={styles.SwiperSlide} key={index}>
            <img className={styles.projectImage} src={project.image} />
            <a href={project.link} target="_blank">
              <div className={styles.titleBg}>
                <p className={styles.projectName}>
                  <RiExternalLinkLine /> {project.name}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Header />
      <Transition />
      <Nav />
    </div>
  );
}
