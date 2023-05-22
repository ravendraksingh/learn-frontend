import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./qtybutton.css";

const QtyButton = ({ qty, onIncr, onDecr }) => {
  return (
    <button className="button qtybtn mb-3 my-sm-0">
      <span
        style={{
          color: "hsl(26, 100%, 55%)",
          fontWeight: "bolder",
          marginRight: "24px",
        }}
        onClick={onDecr}
      >
        <AiOutlineMinus size={22} className="float-start" />
      </span>
      <span style={{ color: "#000", fontWeight: "bolder" }}>{qty ?? 0}</span>
      <span
        style={{
          color: "hsl(26, 100%, 55%)",
          fontWeight: "bolder",
          marginLeft: "24px",
        }}
        onClick={onIncr}
      >
        <AiOutlinePlus size={22} className="float-end" />
      </span>
    </button>
  );
};

export default QtyButton;
