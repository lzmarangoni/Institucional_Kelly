import React from "react";
import styles from "./Videos.module.css";
import Titulo from '../Titulo'


export default function Videos() {
  return (
    <div className={styles.container}>
      <Titulo >Videos</Titulo>
      <div className={styles.videos}>
        <iframe title="Video1" 
          className={styles.video}
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796531163994768%2F&show_text=false&width=560&t=0" height="250px"
        ></iframe>
        <iframe title="Video2"
          className={styles.video}
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796448924002992%2F&show_text=false&width=560&t=0"
        ></iframe>
        <iframe title="Video3"
          className={styles.video}
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796444754003409%2F&show_text=false&width=560&t=0"
        ></iframe>
        <iframe title="Video4"
          className={styles.video}
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796438900670661%2F&show_text=false&width=560&t=0"
        ></iframe>
        <iframe title="Video5"
          className={styles.video}
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796428434005041%2F&show_text=false&width=560&t=0"
        ></iframe>
        <iframe title="Video6"
          className={styles.video}
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796426027338615%2F&show_text=false&width=560&t=0"
        ></iframe>
        <iframe title="Video7"
          className={styles.video}
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796425127338705%2F&show_text=false&width=560&t=0"
        ></iframe>
      </div>
    </div>
  );
}
