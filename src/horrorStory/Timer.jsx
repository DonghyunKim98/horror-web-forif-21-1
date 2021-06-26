import React from "react";
import styles from "./Timer.module.css";

function Timer({ time }) {
  return (
    <div className={styles.timer}>
      <span className={styles.horrorText}>{time}</span>
    </div>
  );
}

export default Timer;
