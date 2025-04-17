import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList = async () => {
  // const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/images/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/images/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image
            src="/images/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/images/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/images/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/images/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>


      </div>
    </div>
  );
};

export default CategoryList;
