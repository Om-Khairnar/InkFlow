"use client";
import Link from "next/link";
import styles from "./authlinks.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  
  const handleLogout = () => {
    logout(); // Use the logout function from AuthContext
    alert("Logged out successfully.");
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={handleLogout}>
            Logout
          </span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {isAuthenticated ? (
            <>
              {" "}
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={handleLogout}>
                Logout
              </span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
