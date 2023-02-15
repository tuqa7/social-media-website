import React from "react";
import "./Range.css";

const Range = (props) => {
  return (
    <div>
      {props.label}
      <input
        className="range"
        type={"range"}
        min="0"
        max="100"
        id={props.slideridlikes}
        step={1}
        value={props.value}
        list="data"
        onChange={
          props.handleparmas
        }
      />
      <output name="result" htmlFor={props.slideridlikes}>
        {props.value}
      </output>
    </div>
  );
};

export default Range;
