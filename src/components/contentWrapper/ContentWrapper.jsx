import styles from "./ContentWrapper.module.scss";

function ContentWrapper(props) {
  return <div className={styles.contentWrapper}>{props.children}</div>;
}

export default ContentWrapper;
