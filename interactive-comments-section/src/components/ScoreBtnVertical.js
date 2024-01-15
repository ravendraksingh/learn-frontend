import React from "react";
import "./scorebtnvertical.css";

const ScoreBtnVertical = ({ score }) => {
  return (
    <div className="score-btn-vertical">
      <img src={"./images/icon-plus.svg"} />
      <span>{score ?? 0}</span>
      <img src={"./images/icon-minus.svg"} />
    </div>
  );
};

export default ScoreBtnVertical;
