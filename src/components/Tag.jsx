import React from "react";
import "./Tag.css";
export default function Tag({ tag, selectTag, checkedTag }) {
  const tagStyle = {
    HTML: { backgroundColor: "#e4eb15" },
    CSS: { backgroundColor: "#34eb71" },
    JavaScript: { backgroundColor: "#eb742a" },
    React: { backgroundColor: "#39cced" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <>
      <button
        type="button"
        className="tag"
        onClick={() => selectTag(tag)}
        style={checkedTag ? tagStyle[tag] : tagStyle.default}
      >
        {tag}
      </button>
    </>
  );
}
