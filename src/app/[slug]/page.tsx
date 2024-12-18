import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments"

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>LAry d sgygVxystgcvasygc vasuch asuc</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/images/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John DOe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/images/p1.jpeg" alt="" fill className={styles.images} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              akbiucia boudoaiujb oiauboi bfoi i iunovij boi oiujoihblihv i li
              ovij s klvjbv ivjnlskj nl lk kjsnlvjk l kjnvlskjnlkj lkjnvlj nlkj
              l lkjnl skj nls kjnlvj nlkjv nlkjnlvkjs nvlkj nljv nl vkjnvlj
              nkjvn lkjvn lvk jsb sj ls jnls kj nlkj nlkj nlkj nlkj njlksjmnlkj
              lkn l kjn lkjn lk
            </p>
            <h2> akbiucia boudoaiujb oiauboi bfoi </h2>
            <p>
              akbiucia boudoaiujb oiauboi bfoi i iunovij boi oiujoihblihv i li
              ovij s klvjbv ivjnlskj nl lk kjsnlvjk l kjnvlskjnlkj lkjnvlj nlkj
              l lkjnl skj nls kjnlvj nlkjv nlkjnlvkjs nvlkj nljv nl vkjnvlj
              nkjvn lkjvn lvk jsb sj ls jnls kj nlkj nlkj nlkj nlkj njlksjmnlkj
              lkn l kjn lkjn lk
            </p>
            <p>
              akbiucia boudoaiujb oiauboi bfoi i iunovij boi oiujoihblihv i li
              ovij s klvjbv ivjnlskj nl lk kjsnlvjk l kjnvlskjnlkj lkjnvlj nlkj
              l lkjnl skj nls kjnlvj nlkjv nlkjnlvkjs nvlkj nljv nl vkjnvlj
              nkjvn lkjvn lvk jsb sj ls jnls kj nlkj nlkj nlkj nlkj njlksjmnlkj
              lkn l kjn lkjn lk
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
