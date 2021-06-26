import React,{useState}  from "react";
import styles from "./horrorStory.module.css";
import Story from "./story.jsx";

function horrorStory() {
  

  return (
    <div>
      <div className={styles.title}>Horror Story</div>
      <div className={styles.contents}>
        <Story className={styles.story}></Story>
      </div>
    </div>
    );
}

export default horrorStory;
