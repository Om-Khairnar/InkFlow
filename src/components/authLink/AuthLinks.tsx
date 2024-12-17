"use client";
import React, { useState } from "react";
import styles from "./authlinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          {" "}
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default AuthLinks;
