import React from "react";
import styles from "./cardlist.module.css";
import Pagination from '../pagination/Pagination'
import Image from "next/image";

const Featured = () => {
  return <div className={styles.container}>
    <Pagination/>
  </div>;
};

export default Featured;
