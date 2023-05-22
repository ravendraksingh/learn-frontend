import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Add2CartBtn = () => {
  return (
    <button
      className="btn btn-outline-primary"
      style={{
        backgroundColor: "hsl(26, 100%, 55%)",
        color: "white",
        fontWeight: "bold",
        border: "1px solid hsl(26, 100%, 55%)",
        paddingLeft: "24px",
        paddingRight: "24px",
        borderRadius: "8px",
      }}
    >
      <AiOutlineShoppingCart size="18px" /> Add to cart
    </button>
  );
};

export default Add2CartBtn;
