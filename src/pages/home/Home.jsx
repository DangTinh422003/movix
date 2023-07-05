import styles from "./Home.module.scss";
import HeroBanner from "./heroBanner/HeroBanner";

function Home() {
  return (
    <div className="homePage">
      <HeroBanner></HeroBanner>
    </div>
  );
}

export default Home;
