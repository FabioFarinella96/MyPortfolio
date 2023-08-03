"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { HiHome, HiUser, HiViewColumns } from "react-icons/hi2";

import { usePathname } from "next/navigation";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about/", icon: <HiUser /> },
  { name: "work", path: "/works/", icon: <HiViewColumns /> },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <div className={styles.Nav}>
      {navData.map((link, index) => {
        return (
          <Link
            className={`${
              link.path === pathName ? styles.redIcon : styles.icon
            }`}
            href={link.path}
            key={index}
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
