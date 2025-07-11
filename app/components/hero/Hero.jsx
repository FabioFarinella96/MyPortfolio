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
          Sono Fabio, sviluppatore web specializzato nella realizzazione di
          <span className={styles.bold}> siti web</span>,
          <span className={styles.bold}> siti vetrina</span> e
          <span className={styles.bold}> landing page</span> su misura per la
          tua attività.
          <br />
          Scopri chi sono, guarda alcuni progetti e contattami per dare vita
          alla tua presenza online!
        </p>
        <p className={styles.desktopText}>
          Sono Fabio, sviluppatore web specializzato nella realizzazione di
          <span className={styles.bold}> siti web</span>,
          <span className={styles.bold}> siti vetrina</span> e
          <span className={styles.bold}> landing page</span> su misura per la
          tua attività.
          <br />
          Scopri chi sono, guarda alcuni progetti e contattami per dare vita
          alla tua presenza online!
        </p>
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
