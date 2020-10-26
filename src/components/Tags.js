import React from "react";
import { TiTags } from "react-icons/ti";

export default function Tags(props) {
  const { uniqueTags } = props;
  return (
    <p className="filterTags-wrap">
      <TiTags style={{ marginRight: "0.2rem", color: "#ccc" }} />
      <select className="select-wrap">
        <option>Tags</option>
        {uniqueTags.map((tag) => (
          <option value={tag}>{tag}</option>
        ))}
      </select>
    </p>
  );
}
