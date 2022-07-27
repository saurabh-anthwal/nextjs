import React from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";


const Dummy = () => {
  return (
    <>
      <style jsx>
        {`
          .mySpan {
            color: red;
          }
        `}
      </style>

      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="contact">
            <li>ContactUs</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Dummy;
