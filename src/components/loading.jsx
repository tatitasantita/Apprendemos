import React from "react";

import styles from "./loading";

const Loading = props => {
  return (
    <div
      className={`h-100 d-flex flex-column justify-content-center align-items-center ${styles.loading}`}
    >
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  );
};

export default Loading;
