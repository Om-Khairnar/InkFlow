import styles from "./writePage.module.css";

const WritePage = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
    </div>
  );
};

export default WritePage;
