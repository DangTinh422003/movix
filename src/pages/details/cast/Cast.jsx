import { useSelector } from "react-redux";

import styles from "./Cast.module.scss";
import ContentWrapper from "~/components/contentWrapper/ContentWrapper";
import Img from "~/components/lazyLoadImage/Img";
import avatar from "~/assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className={styles.skItem}>
        <div className={`${styles.circle} skeleton`}></div>
        <div className={`${styles.row} skeleton`}></div>
        <div className={`${styles.row2} skeleton`}></div>
      </div>
    );
  };
  return (
    data?.length > 0 && (
      <div className={styles.castSection}>
        <ContentWrapper className={styles.contentWrapper}>
          <div className={styles.sectionHeading}>Top Cast</div>
          {!loading ? (
            <div className={styles.listItems}>
              {data?.map((item) => {
                let imgUrl = item.profile_path
                  ? url.profile + item.profile_path
                  : avatar;
                return (
                  <div key={item.id} className={styles.listItem}>
                    <div className={styles.profileImg}>
                      <Img src={imgUrl} />
                    </div>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.character}>{item.character}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.castSkeleton}>
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
            </div>
          )}
        </ContentWrapper>
      </div>
    )
  );
};

export default Cast;
