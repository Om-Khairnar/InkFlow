import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Featured = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write the a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/images/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.2.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            akbiucia boudoaiujb oiauboi bfoi i iunovij boi oiujoihblihv i li
            ovij s klvjbv ivjnlskj nl lk kjsnlvjk l kjnvlskjnlkj lkjnvlj nlkj l
            lkjnl skj nls kjnlvj nlkjv nlkjnlvkjs nvlkj nljv nl vkjnvlj nkjvn
            lkjvn lvk jsb sj ls jnls kj nlkj nlkj nlkj nlkj njlksjmnlkj lkn l
            kjn lkjn lk
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
