import React from "react";
import { Link } from "react-router-dom";
import styles from "./Click.module.css";

const Click = () => {
  return (
    <>
      <div>
        <Link to="/HorrorSound">
          <button className={styles.sound}>소리</button>
        </Link>
        <Link to="/HorrorStory">
          <button className={styles.write}>괴담</button>
        </Link>
      </div>
    </>
  );
};

export default Click;
