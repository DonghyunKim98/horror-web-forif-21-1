import React, { useState } from "react";
import styles from "./horrorStory.module.css";
import Text from "./Text"

function Story(props) {

    //const setClick = props.setClick;
    const setTimeValue = props.setTimeValue;

    function clickListener() {
        //setClick(1);
        setTimeValue(0);
    }


    return (
        <div className={styles.eachStory}>
            <div className={styles.textPart}>
                <div className={styles.storyContent} dangerouslySetInnerHTML={{ __html: Text }} />
            </div>
            <div className={styles.btnPart}>
                <button className={styles.true} onClick={clickListener}> True </button>
                <div className={styles.showAnswer}> </div>
                <button className={styles.false} onClick={clickListener}> False </button>
            </div>
        </div>
    );
}

export default Story;