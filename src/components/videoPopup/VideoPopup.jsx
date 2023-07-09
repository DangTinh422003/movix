import React from "react";
import ReactPlayer from "react-player/youtube";

import styles from "./VideoPopup.module.scss";
import clsx from "clsx";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    console.log(show);
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={clsx(styles.videoPopup, `${show ? styles.visible : ""}`)}>
      <div className={styles.opacityLayer} onClick={hidePopup}></div>
      <div className={styles.videoPlayer}>
        <span className={styles.closeBtn} onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
