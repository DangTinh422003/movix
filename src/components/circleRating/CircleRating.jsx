import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./CircleRating.module.scss";
import "./styling.scss";
import clsx from "clsx";

const CircleRating = (props) => {
  const rating = props.rating;
  const className = props.className;
  const textColor = props.textColor || "black";
  const backgroundColor = props.backgroundColor;


  return (
    <div className={clsx(styles.circleRating, className)}>
      <CircularProgressbar
        {...props}
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textColor,
          backgroundColor,
        })}
      />
    </div>
  );
};

export default CircleRating;
