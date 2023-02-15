import React from "react";
import { useSearchParams } from "react-router-dom";
import Range from "./Range";
import "./Range.css";

const RangeComponant = () => {
  const [params, changeparams] = useSearchParams();

  const handleparmaslikes = (e) => {
    const new_par = new URLSearchParams(params);
    if (e.currentTarget.value) {
      new_par.set("likes", e.currentTarget.value);
    } else {
      new_par.delete("likes");
    }

    changeparams(new_par);
  };

  const handleparmascommants = (e) => {
    const new_par = new URLSearchParams(params);
    if (e.currentTarget.value) {
      new_par.set("commants", e.currentTarget.value);
    } else if (e.currentTarget.value === 0) {
      new_par.delete("commants");
    }

    changeparams(new_par);
  };
  return (
    <div className="rangebody">
      <Range
        label={"likes : "}
        value={params.get("likes") || ""}
        handleparmas={handleparmaslikes}
        slideridlikes={"slideridlikes"}
      />
      <Range
        label={"commants :"}
        value={params.get("commants") || 0}
        handleparmas={handleparmascommants}
        slideridcommants={"slideridcommants"}
      />
    </div>
  );
};

export default RangeComponant;
