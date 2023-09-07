import React from "react";
import styles from "./Videos.module.css";
import Titulo from "../../Components/Titulo";

export default function Videos() {
  return (
    <>
      <Titulo>Entrevistas</Titulo>
      <div className={styles.videos}>
        <div className={styles.videoScroll}>
          <div className={styles.video}>
            <iframe
              title="Video1"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796531163994768%2F&show_text=false&width=560&t=0"
              width="560"
              height="340"
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              title="Video2"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796448924002992%2F&show_text=false&width=560&t=0"
              width="560"
              height="340"
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              title="Video3"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796444754003409%2F&show_text=false&width=560&t=0"
              width="560"
              height="340"
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              title="Video4"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796438900670661%2F&show_text=false&width=560&t=0"
              width="560"
              height="340"
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              title="Video5"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796428434005041%2F&show_text=false&width=560&t=0"
              width="560"
              height="340"
            ></iframe>
          </div>

          <div className={styles.video}>
            <iframe
              title="Video6"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796426027338615%2F&show_text=false&width=560&t=0"
              width="560"
              height="340"
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              title="Video7"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100063524555344%2Fvideos%2F1796425127338705%2F&show_text=false&width=560&t=0"
              width="560"
              height="340"
            ></iframe>
          </div>
        </div>
        <p className={styles.informativo}>Arraste para o lado para ver mais...</p>
      </div>
    </>
  );
}
