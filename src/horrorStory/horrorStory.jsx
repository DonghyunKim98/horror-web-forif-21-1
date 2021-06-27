import React, { useEffect, useState } from "react";
import styles from "./horrorStory.module.css";
import Story from "./Story.jsx";
import Timer from "./Timer.jsx";

import ghostImage from "./images/Ghost.jpeg";

function HorrorStory() {
  const [timeValue, setTimeValue] = useState(30);

  useEffect(() => {
    if (timeValue === 0) return;
    const decreasingValueAmount = timeValue === 25 ? 10 : 1;
    const intervalTimeAmount = timeValue < 10 ? 333 : 1000;
    const tick = setInterval(() => {
      setTimeValue((prev) => {
        const newTime = prev - decreasingValueAmount;
        return newTime;
      });
    }, intervalTimeAmount);
    return () => clearInterval(tick);
  }, [timeValue]);
  return (
    <>
      <div className={styles.page}>
        <div className={styles.title}>Horror Story</div>
        <div className={styles.contents}>
          <Story className={styles.story} setTimeValue={setTimeValue}></Story>
          <Timer time={timeValue} />
          {!timeValue && (
            <div className={styles.wrongAnswerContents}>
              <img src={ghostImage} />
              틀렸잖아........
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HorrorStory;
