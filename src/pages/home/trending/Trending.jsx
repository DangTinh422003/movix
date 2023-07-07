import { useState } from "react";

import styles from "./Trending.module.scss";
import SwitchTabs from "~/components/switchTabs/SwitchTabs";
import ContentWrapper from "~/components/contentWrapper/ContentWrapper";
import useFetch from "~/hooks/useFetch";

function Trending() {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className={styles.carouselSection}>
      <ContentWrapper className={styles.contentWrapper}>
        <span className={styles.carouselTitle}>Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
}

export default Trending;
