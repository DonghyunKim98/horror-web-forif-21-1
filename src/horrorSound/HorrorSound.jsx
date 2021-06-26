import React, { useEffect } from "react";
import useSound from "use-sound";
import styles from "./HorrorSound.module.css";
import backgroundAudioPath from './SoundTrack/2.mp3';
import laughEffectPath from './SoundTrack/laugh.mp3';
import breakwindowEffectPath from './SoundTrack/break.mp3';
import drawerEffectPath from './SoundTrack/drawer.mp3';
import ropeEffectPath from './SoundTrack/rope.mp3';

function HorrorSound() {
  const laughSoundEffect = new Audio(laughEffectPath);
  const breakwindowSoundEffect = new Audio(breakwindowEffectPath);
  const drawerSoundEffect = new Audio(drawerEffectPath);
  const ropeSoundEffect = new Audio(ropeEffectPath);

  const laugh = () => {
    laughSoundEffect.play();
  } 
  const breakwindow = () => {
    breakwindowSoundEffect.play();
  }
  const drawer = () => {
    drawerSoundEffect.play();
  }
  const rope = () => {
    ropeSoundEffect.play();
  }

  const [, {sound}] = useSound(backgroundAudioPath, { volume: 0.25 });
  useEffect(() => {
    if(sound===null) return;
    sound._loop = true;
    sound.play();
  }, [sound]);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.blur}/>
      </div>
      <div className={styles.buttons}>
        <button className={styles.laughbtn} onClick={laugh}>doll</button>
        <button className={styles.breakbtn} onClick={breakwindow}>break</button>
        <button className={styles.drawerbtn} onClick={drawer}>drawer</button>
        <button className={styles.ropebtn} onClick={rope}>rope</button>
      </div>
    </>
  );
}

export default HorrorSound;