import React from 'react';
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <div className={styles.container}>  
    <main className={styles.main}>
          <div className={styles.blogItem}>
            <Link href={"/blogPost/learn-javascript"}>
            <h3>How to learn java script in 2022.</h3>
            </Link>
            <p>
              java script is most widly used language for serverside scrpiting
              languge which is very powerfull language..
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn java script in 2022.</h3>
            <p>
              java script is most widly used language for serverside scrpiting
              languge which is very powerfull language..
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn java script in 2022.</h3>
            <p>
              java script is most widly used language for serverside scrpiting
              languge which is very powerfull language..
            </p>
          </div>
        </main> 
        </div>
  )
}

export default blog