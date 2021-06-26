import React,{useState} from "react";
import styles from "./horrorStory.module.css";

function Story(){
    
    const [answer,setAnswer] = useState();
    
    function clickTrueListener(){
        setAnswer(1)
    }

    function clickFalseListener(){
        setAnswer(0)
    }

    return(
        <div className={styles.eachStory}>
            <div className={styles.textPart}>
                <div className={styles.storyContent}>
                    <p>한때는 철도 공무원으로 근무했던 주인공. 
                    근무 시절 동료들과 함께 철길을 점검하고 있었다. 
                    점검 도중 열차가 접근을 해서 전부 대피했지만, 
                    한 동료가 대피 도중에 넘어져 발이 철길에 끼였다. 
                    그 탓에 움직이지 못한 그 동료는 결국 열차에 그대로 치이고 말았다.
                    열차에 치인 동료의 몸은 처참하게 찢겨졌고, 
                    그 상황을 지켜볼 수밖에 없었던 주인공 발 앞에 큼직한 어느 형체가 떨어졌다.
                    바로 열차에 치인 동료의 잘린 머리였다.
                    더더욱 끔찍한 일은 잘린 상태에서</p>
                    "아이고 깜짝이야! 죽을 뻔했네..."
                    <p>라고 한마디 하고 숨을 거두었던 것. 
                    그 동료가 순식간의 상황 때문에 자신의 죽음을 몰랐던 건지, 
                    아니면 죽음도 모를 만큼 자신의 몸이 찢겨지는 고통을 못느꼈던 건지, 
                    주인공은 동료의 마지막 한마디에 충격을 받아, 
                    이후 극심한 정신적 장애 판정을 받고 철도 공무원직에서 퇴직하고 말았다. 
                    현재는 신경안정제를 먹으며 정신과 치료를 계속 받는데, 
                    그 사건이 떠오를 때마다 주인공은 늘 트라우마에 시달리며 괴로워한다.</p>
                </div>
            </div>
            <div className={styles.btnPart}>
                <button className={styles.true} onClick={clickTrueListener}> 진실 </button>
                <div className={styles.showAnswer}> </div>
                <button className={styles.false} onClick={clickFalseListener}> 거짓 </button>
            </div>
        </div>
    );
}

export default Story;