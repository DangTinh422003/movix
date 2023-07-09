import { useParams } from "react-router-dom";
import styles from "./Detail.module.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetch from "../../hooks/useFetch";

function Detail() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div className={styles.detail}>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    </div>
  );
}

export default Detail;
