import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/images/p1.jpeg"
          alt="Product Image"
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectrru adipising elit.</h1>
        </Link>
        <p className={styles.desc}>
          sjvnosj ofnaofkv ofkncokmvokm okfmoskmvokmkmokvmsokmvokm smf vekjsvkn
          orjknv rsjkv ojr vokjnvork ngojnbojrnk bok mok skjvn r nbv9ruijbn vskj
          nijsnv ijnivskjn n ini nijn oo oijo skj nivjkjnsi ijsvniuvjn isjnijvn
          ijs nijnvijnj jsisnnsj ijsna hcj ia iuafnije nijn ijfn ijsn infijn nij
          ?.....
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
