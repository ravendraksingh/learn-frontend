import React from "react";
import "./scorebtn.css";

const ScoreBtn = ({ score }) => {
  return (
    <div className="score-btn">
      <img src={"./images/icon-plus.svg"} />
      <span>{score ?? 0}</span>
      <img src={"./images/icon-minus.svg"} />
    </div>
  );
};

export default ScoreBtn;
