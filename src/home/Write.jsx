import React from "react";
import styles from "./Write.module.css";

const Click=()=>{
    return(
        <>
        <div>
            <button className={styles.sound}>소리
            </button>
            <button className={styles.write}>괴담</button>
        </div>
        </>
    );
}

export default Click;