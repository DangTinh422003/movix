import React from "react";
import { useSelector } from "react-redux";

import styles from "./Genres.module.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className={styles.genres}>
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className={styles.genre}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
