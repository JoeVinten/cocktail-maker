import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.innerNav}>
        <Link href="/">
          <Image height="40" width="40" src="/logo.svg" />
        </Link>
        Mix it up
      </div>
    </nav>
  );
};

export default Navigation;
