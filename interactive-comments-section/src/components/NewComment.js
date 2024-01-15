import React, { useState } from "react";

const NewComment = ({ currentUser, data, onSendClick, onCancelClick }) => {
  console.log("data", data);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    if (event.target.value !== "" && event.target.value.trim().length > 0) {
      setIsEditing(false);
    }
    setContent(event.target.value.trim());
  };

  const handleSend = () => {
    onSendClick(content);
  };

  const handleCancel = () => {
    onCancelClick();
  };
  var cssString =
    "main-card d-flex flex-column justify-content-between flex-sm-row";

  return (
    <div
      className={data.type === "child" ? "reply-card " + cssString : cssString}
    >
      <div className="d-none d-sm-inline-flex">
        <img src={currentUser.image.png} className="user-img" />
      </div>
      <textarea
        id="content"
        className="input-comment"
        onChange={handleChange}
      ></textarea>
      <div className="d-none d-sm-inline-flex flex-column gap-1">
        <button
          className={`${
            content.trim().length === 0
              ? "btn btn-sm btn-secondary"
              : "btn btn-sm btn-primary"
          }`}
          disabled={isEditing || content.trim().length === 0}
          onClick={handleSend}
        >
          SEND
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
      {/* <div className="d-flex w-100 justify-content-between d-sm-none">
          <img src={currentUser.image.png} className="user-img" />
          <div className="btn-group btn-group-sm">
            <button className="btn btn-primary">SEND</button>
            <button className="btn btn-danger">CANCEL</button>
          </div>
        </div> */}
    </div>
  );
};

export default NewComment;
