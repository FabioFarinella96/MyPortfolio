import styles from "./index.module.scss";
import Link from "next/link";

// icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiDownloadCloud } from "react-icons/fi";

const links = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/fabio-farinella/",
    socialIcon: <BsLinkedin />,
  },
  {
    name: "gitHub",
    link: "https://github.com/FabioFarinella96",
    socialIcon: <BsGithub />,
  },
];

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.logo}>
        fabio{" "}
        <span className={styles.surname}>
          farinella<span>.</span>
        </span>
      </h1>
      <div className={styles.social__icons}>
        {links.map((social, index) => (
          <Link
            key={index}
            className={styles.icon}
            href={social.link}
            target="_blank"
          >
            {social.socialIcon}
          </Link>
        ))}
        <button className={styles.downloadCvBtn}>
          <a href="assets/cv.pdf" download>
            CV
          </a>
          <FiDownloadCloud className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
