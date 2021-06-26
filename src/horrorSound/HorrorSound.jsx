import React, { useEffect } from "react";
import useSound from "use-sound";
import styles from "./HorrorSound.module.css";
import backgroundAudioPath from './SoundTrack/2.mp3';


function HorrorSound() {
  const SoundEffect = new Audio(".mp3");
  const startSoundEffect = () => {
    SoundEffect.play();
  }

  const [, {sound}] = useSound(backgroundAudioPath, { volume: 0.25 });
  useEffect(() => {
    if(sound===null) return;
    sound._loop = true;
    console.log(sound);
    sound.play();
  }, [sound]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.blur}/>
      </div>
      <button className={styles.btn} onclick={startSoundEffect}>doll</button>
    </>
  );
}

export default HorrorSound;