import { useState } from "react";

import styles from "./Popular.module.scss";
import SwitchTabs from "~/components/switchTabs/SwitchTabs";
import ContentWrapper from "~/components/contentWrapper/ContentWrapper";
import useFetch from "~/hooks/useFetch";
import Carousel from "~/components/carousel/Carousel";

function Popular() {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <div className={styles.carouselSection}>
      <ContentWrapper>
        <span className={styles.carouselTitle}>What's Popular</span>
        <SwitchTabs data={["Movie", "TV Show"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
}

export default Popular;
