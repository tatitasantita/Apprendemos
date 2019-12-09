import React from "react";

import styles from "./loading";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";

const Loading = props => {
  return <ReactLoading type={"bars"} color={"white"} />;
};

export default Loading;
