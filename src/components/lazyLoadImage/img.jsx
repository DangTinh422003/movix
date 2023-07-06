import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Img(props) {
  return <LazyLoadImage {...props} alt="" effect="blur"></LazyLoadImage>;
}

export default Img;
