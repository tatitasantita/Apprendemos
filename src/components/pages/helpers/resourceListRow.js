import React from "react";
import "./styles/bookListRow.scss";

const ResourceListRow = props => {
  return (
    <div>
      <span>{props.item}</span>
    </div>
  );
};

export default ResourceListRow;
