import React from "react";
import "./styles/bookListRow.scss";

const BookListRow = props => {
  return (
    <div>
      <span>{props.item}</span>
    </div>
  );
};

export default BookListRow;
