import clsx from "clsx";
import styles from "./SwitchTabs.module.scss";
import { useState } from "react";

function SwitchTabs({ data, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [movingBgPossition, setMovingBgPossition] = useState(0);

  const handleTabChange = (tab, index) => {
    setSelectedTab(index);
    if (index !== 0) {
      setMovingBgPossition(100);
    } else {
      setMovingBgPossition(0);
    }
    onTabChange(tab);
  };

  return (
    <div className={styles.switchTabs}>
      <div className={styles.tabItems}>
        {data.map((tab, index) => (
          <span
            className={clsx(
              styles.tabItem,
              selectedTab === index ? styles.active : ""
            )}
            onClick={(e) => handleTabChange(tab, index)}
            key={index}
          >
            {tab}
          </span>
        ))}
        <span
          className={styles.movingBg}
          style={{ left: movingBgPossition }}
        ></span>
      </div>
    </div>
  );
}

export default SwitchTabs;
