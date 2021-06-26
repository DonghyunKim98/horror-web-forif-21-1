import React, { useState } from "react";
import styles from "./horrorStory.module.css";
import Text from "./Text"

function Story() {

    const [answer, setAnswer] = useState();

    function clickTrueListener() {
        setAnswer(1)
    }

    function clickFalseListener() {
        setAnswer(0)
    }

    return (
        <div className={styles.eachStory}>
            <div className={styles.textPart}>
                <div className={styles.storyContent} dangerouslySetInnerHTML={{ __html: Text }} />
            </div>
            <div className={styles.btnPart}>
                <button className={styles.true} onClick={clickTrueListener}> True </button>
                <div className={styles.showAnswer}> </div>
                <button className={styles.false} onClick={clickFalseListener}> False </button>
            </div>
        </div>
    );
}

export default Story;