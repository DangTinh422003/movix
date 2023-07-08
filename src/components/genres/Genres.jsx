import { useSelector } from "react-redux";
import styles from "./Genres.module.scss";

function Genres({ data }) {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className={styles.genres}>
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} lassName={styles.genre}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
