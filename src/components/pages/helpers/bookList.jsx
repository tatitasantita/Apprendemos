import React from "react";
import BookListRow from "./bookListRow";

const BookList = props => {
  return (
    <div className="perRow">
      {props.items.map(c => (
        <div className="bookListRow">
          <BookListRow key={c.title} item={c.title} />
          <BookListRow key={c.author} item={c.author} />
          <BookListRow key={c.language} item={c.language} />
          <BookListRow key={c.link} item={c.link} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
