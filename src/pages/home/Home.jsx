import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";

function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
}

// export default React.memo(Home);
export default Home;
