import clsx from "clsx";
import styles from "./ContentWrapper.module.scss";

function ContentWrapper({ className, children }) {
  return (
    <div className={clsx(styles.contentWrapper, className)}>
      {children}
    </div>
  );
}

export default ContentWrapper;
