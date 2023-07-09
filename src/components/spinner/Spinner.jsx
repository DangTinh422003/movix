import styles from "./Spinner.module.scss";
import ReactLoading from "react-loading";

const Spinner = ({ initial }) => {
  return (
    <ReactLoading
      type={"spin"}
      color={"#ffff"}
      // height={667}
      // width={375}
      className={styles.spinner}
    />
  );
};

export default Spinner;
