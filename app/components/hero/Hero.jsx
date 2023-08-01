import styles from "./index.module.scss";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <h2 className={styles.title}>
        Benvenuto Nel Mio <span>Portfolio</span>
      </h2>
      <div className={styles.textContent}>
        <p className={styles.text}>
          Sono Fabio, Front End Developer. <br /> Qui troverai tutto ciò che
          riguarda me: informazioni personali, contatti per connetterci e i
          progetti sviluppati. <br /> Esplora, scopri e lasciati ispirare!
        </p>
        <p className={styles.desktopText}>
          Sono Fabio, Front End Developer. <br /> Qui troverai tutto ciò che
          riguarda me: informazioni personali, contatti per connetterci e i
          progetti sviluppati. Esplora, scopri e lasciati ispirare!
        </p>
        {/* animated button  */}
        {/* <div className={styles.box3}>
          <div className={styles.btnThree}>
          <span>Visualizza progetti</span>
          </div>
        </div> */}
      </div>
      <div className={styles.projectsLink}>
        <Link href={"/works"} className={styles.linkTo}>
          <Image
            className={styles.snipe}
            src="/circle.png"
            width={120}
            height={120}
            alt="shape"
          />
          <HiArrowRight className={styles.arrowIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
