import React from "react";
import styles from "./horrorStory.module.css";
import Story from "./Story.jsx";

function horrorStory() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.title}>Horror Story</div>
        <div className={styles.contents}>
          <Story className={styles.story}></Story>
        </div>
      </div>
    </>
  );
}

export default horrorStory;
