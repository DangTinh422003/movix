import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";

import styles from "./VideosSection.module.scss";
import ContentWrapper from "~/components/contentWrapper/ContentWrapper";
import VideoPopup from "~/components/videoPopup/VideoPopup";
import Img from "~/components/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className={styles.skItem}>
        <div className={`${styles.thumb} skeleton`}></div>
        <div className={`${styles.row} skeleton`}></div>
        <div className={`${styles.row2} skeleton`}></div>
      </div>
    );
  };

  return (
    data?.results?.length > 0 && (
      <div className={styles.videosSection}>
        <ContentWrapper className={styles.contentWrapper}>
          <div className={styles.sectionHeading}>Official Videos</div>
          {!loading ? (
            <div className={styles.videos}>
              {data?.results?.map((video) => (
                <div
                  key={video.id}
                  className={styles.videoItem}
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                  }}
                >
                  <div className={styles.videoThumbnail}>
                    <Img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                    <CiPlay1 />
                  </div>
                  <div className={styles.videoTitle}>{video.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.videoSkeleton}>
              {loadingSkeleton()}
              {loadingSkeleton()}
              {loadingSkeleton()}
              {loadingSkeleton()}
            </div>
          )}
        </ContentWrapper>
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </div>
    )
  );
};

export default VideosSection;
