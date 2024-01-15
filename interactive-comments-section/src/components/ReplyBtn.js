import React from "react";
import "./replybutton.css";

const ReplyBtn = ({ onReplyClick }) => {
  return (
    <button className="reply-btn" onClick={onReplyClick}>
      <img src={"./images/icon-reply.svg"} className="icon-img" />
      Reply
    </button>
  );
};

export default ReplyBtn;
