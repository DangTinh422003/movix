import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import styles from "./DetailsBanner.module.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import { BsPlay } from "react-icons/bs";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/img";
import PosterFallback from "../../../assets/no-poster.png";
import clsx from "clsx";

function DetailsBanner({ video, crew }) {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes > 0 ? minutes : ""}m`;
  };

  return (
    <div className={styles.detailsBanner}>
      {!loading ? (
        <>
          {!!data && (
            <>
              <div className={styles.backdropImg}>
                <Img src={url.backdrop + data?.backdrop_path} />
              </div>
              <div className={styles.opacityLayer}></div>
              <ContentWrapper>
                <div className={styles.content}>
                  <div className={styles.left}>
                    {data.poster_path ? (
                      <Img
                        className={styles.posterImg}
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img src={PosterFallback} />
                    )}
                  </div>

                  <div className={styles.right}>
                    <div className={styles.title}>
                      {`${data.name || data.title} (${dayjs(
                        data.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className={styles.subTitle}>{data.tagline}</div>

                    <div className={styles.row}>
                      <CircleRating
                        rating={data.vote_average.toFixed(1)}
                        className={styles.circleRating}
                      />

                      <div className={styles.playbtn} onClick={() => {}}>
                        <BsPlay />
                        <span className={styles.text}>Watch Trailer</span>
                      </div>
                    </div>

                    <div className={styles.overview}>
                      <div className={styles.heading}>Overview</div>
                      <div className={styles.description}>{data.overview}</div>
                    </div>

                    <div className={styles.info}>
                      {data.status && (
                        <div className={styles.infoItem}>
                          <span className={clsx(styles.text, styles.bold)}>
                            Status:{" "}
                          </span>
                          <span className={styles.text}>{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className={styles.infoItem}>
                          <span className={clsx(styles.text, styles.bold)}>
                            Release Date:{" "}
                          </span>
                          <span className={styles.text}>
                            {dayjs(data.release_date).format("MMM D,YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className={styles.infoItem}>
                          <span className={clsx(styles.text, styles.bold)}>
                            Runtime:{" "}
                          </span>
                          <span className={styles.text}>
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {director?.length > 0 && (
                      <div className={styles.info}>
                        <span className={clsx(styles.text, styles.bold)}>
                          Director:{" "}
                        </span>
                        <span className={styles.text}>
                          {director.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {writer?.length > 0 && (
                      <div className={styles.info}>
                        <span className={clsx(styles.text, styles.bold)}>
                          Writer:{" "}
                        </span>
                        <span className={styles.text}>
                          {writer.map((w, i) => (
                            <span key={i}>
                              {w.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
            </>
          )}
        </>
      ) : (
        <div className={styles.detailsBannerSkeleton}>
          <ContentWrapper>
            <div className={clsx(styles.left, "skeleton")}></div>
            <div className={styles.right}>
              <div className={clsx(styles.row, "skeleton")}></div>
              <div className={clsx(styles.row, "skeleton")}></div>
              <div className={clsx(styles.row, "skeleton")}></div>
              <div className={clsx(styles.row, "skeleton")}></div>
              <div className={clsx(styles.row, "skeleton")}></div>
              <div className={clsx(styles.row, "skeleton")}></div>
              <div className={clsx(styles.row, "skeleton")}></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
}

export default DetailsBanner;
