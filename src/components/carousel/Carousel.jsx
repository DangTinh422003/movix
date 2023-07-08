import clsx from "clsx";
import dayjs from "dayjs";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import styles from "./Carousel.module.scss";
import ContentWrapper from "~/components/contentWrapper/ContentWrapper";
import Img from "~/components/lazyLoadImage/img";
import PosterFallback from "~/assets/no-poster.png";
import CircleRating from "~/components/circleRating/CircleRating";
import Genres from "../genres/Genres";

function Carousel({ data, loading }) {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  const skItem = () => {
    return (
      <div className={clsx(styles.skeletonItem)}>
        <div className={clsx(styles.posterBlock, styles.skeleton)}></div>
        <div className={clsx(styles.textBlock)}>
          <div className={clsx(styles.title, styles.skeleton)}></div>
          <div className={clsx(styles.date, styles.skeleton)}></div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.carousel}>
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className={clsx(styles.arrow, styles.carouselLeftNav)}
          onClick={(e) => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className={clsx(styles.arrow, styles.carouselRighttNav)}
          onClick={(e) => navigation("right")}
        />
        {!loading ? (
          <div className={styles.carouselItems} ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className={styles.carouselItem}
                  onClick={() => navigate(`/${item.media_type}/${item.id}`)}
                >
                  <div className={styles.posterBlock}>
                    <Img
                      src={posterUrl}
                      className={styles.lazyloadImageBackground}
                    />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className={styles.textBlock}>
                    <span className={styles.title}>
                      {item.title || item.name}
                    </span>
                    <div
                      className={styles.date}
                      onClick={(e) => console.log(e.target)}
                    >
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.loadingSkeleton}>
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default Carousel;
