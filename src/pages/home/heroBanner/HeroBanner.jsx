import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "~/hooks/useFetch";
import styles from "./HeroBanner.module.scss";
import Img from "~/components/lazyLoadImage/Img.jsx";
import ContentWrapper from "~/components/contentWrapper/ContentWrapper";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading, error } = useFetch("/movie/upcoming");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    const bg = url.backdrop + data?.results[randomIndex]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    console.log(e);
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className={styles.heroBanner}>
      {!loading && (
        <div className={styles.backdropImg}>
          <Img src={background} className={styles.lazyLoadImageBackground} />
        </div>
      )}

      <div className={styles.opacityLayer}></div>

      <ContentWrapper>
        <div className={styles.heroBannerContent}>
          <span className={styles.title}>Welcome.</span>
          <span className={styles.subTitle}>
            Millions of movies, TV shows and people to discover. Explore now.
          </span>

          <div className={styles.searchInput}>
            <input
              type="text"
              placeholder="Search for a movie or TV show..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyUp={searchQueryHandler}
            />
            <button
              onClick={(e) => {
                if (query.length > 0) {
                  navigate(`/search/${query}`);
                }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
