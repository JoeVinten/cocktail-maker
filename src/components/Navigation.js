import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.innerNav}>
        <Link href="/">
          <div className={styles.logo}>
            <Image height="40" width="40" src="/logo.svg" alt="logo" />
            Mix it up
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
