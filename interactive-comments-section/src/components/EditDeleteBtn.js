import React from "react";
import "./replybutton.css";

const EditDeleteBtn = ({ onDeleteClick, onEditClick, isEditing }) => {
  const handleDelete = () => {
      onDeleteClick();
  };
  const handleEdit = () => {
    onEditClick();
  };
  return (
    <div>
      <button className="reply-btn" onClick={handleDelete}>
        <img src={"./images/icon-delete.svg"} className="mx-2 ml-0" />
        <span className="text-soft-red">{isEditing ? "Cancel" : "Delete"}</span>
      </button>
      <button className="reply-btn" onClick={handleEdit}>
        <img src={"./images/icon-edit.svg"} className="mx-2" />
        <span className="reply">{isEditing ? "Update" : "Edit"}</span>
      </button>
    </div>
  );
};

export default EditDeleteBtn;
