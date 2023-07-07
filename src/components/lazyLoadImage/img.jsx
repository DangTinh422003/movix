import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Img(props) {
  return (
    <LazyLoadImage
      {...props}
      className={props.className}
      alt=""
      effect="blur"
      width={"100%"}
      height={"100%"}
    ></LazyLoadImage>
  );
}

export default Img;
