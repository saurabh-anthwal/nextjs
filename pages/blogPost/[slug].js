import React from 'react';
import {useRouter} from "next/router";
import styles from "../../styles/BlogPost.module.css";


const Slug = () => {
    const router = useRouter()
    const {slug} = router.query
  return (
    <div className={styles.container}>
      <main className={styles.main} >
      <h1>Title of the page {slug} </h1>'
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illum mollitia facilis iste id aliquid ea harum. Nam, non repellendus officia autem, harum eius quo at aut odio, a fugiat!
      </div>
      </main>
    </div> 
  )
}

export default Slug