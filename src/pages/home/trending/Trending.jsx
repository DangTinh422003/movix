import { useState } from "react";

import styles from "./Trending.module.scss";
import SwitchTabs from "~/components/switchTabs/SwitchTabs";
import ContentWrapper from "~/components/contentWrapper/ContentWrapper";
import useFetch from "~/hooks/useFetch";
import Carousel from "~/components/carousel/Carousel";

function Trending() {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className={styles.carouselSection}>
      <ContentWrapper>
        <span className={styles.carouselTitle}>Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default Trending;
