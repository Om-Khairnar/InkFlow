"use client";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import styles from "./homepage.module.css"
import styles from "@/app/global.css"
const DashHome = () => {
  return (
    <>
      <div className={styles.container}>
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList />
          <Menu />
        </div>
      </div>
    </>
  );
};

export default DashHome;
