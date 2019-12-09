import React from "react";
import ResourceListRow from "./resourceListRow";
import "./styles/bookListRow.scss";

const ResourceList = props => {
  return (
    <div className="bookListRow">
      {props.items.map(c => (
        <div>
          <a href={c.link}>{c.title}</a>
          {/* <ResourceListRow key={c.title} item={c.title} />
          <ResourceListRow key={c.link} item={c.link} /> */}
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
