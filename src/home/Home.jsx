import React from "react";
import Click from "./Click";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.contents}>
        <div>
          <h1>Forif-21-1-Horror</h1>
        </div>
        <h2>테마</h2>
        <Click />
        <p>-react-</p>
      </div>
    </>
  );
};

export default Home;
