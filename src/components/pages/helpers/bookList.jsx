import React from "react";
import BookListRow from "./bookListRow";

const BookList = props => {
  return (
    <div className="bookListContainer">
      <div className="perRow">
        {props.items.map(c => (
          <div className="bookListRow">
            <a href={c.link}>{c.title}</a>
            <BookListRow key={c.author} item={c.author} />
            <BookListRow key={c.language} item={c.language} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
