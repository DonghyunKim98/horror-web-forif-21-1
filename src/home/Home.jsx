import React from "react";
import Click from "./Click";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.contents}>
        <h1>Forif-21-1-Horror</h1>
        <h2>테마</h2>
        <Click />
        <span>-react-</span>
      </div>
    </>
  );
};

export default Home;
