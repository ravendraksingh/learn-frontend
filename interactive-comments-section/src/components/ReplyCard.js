import React, { useContext, useState } from "react";
import EditDeleteBtn from "./EditDeleteBtn";
import ReplyBtn from "./ReplyBtn";
import ScoreBtnVertical from "./ScoreBtnVertical";
import ScoreBtn from "./ScoreBtn";

import "./replycard.css";
import CommentsContext from "../context/CommentsContext";
import { Button, Modal } from "react-bootstrap";
import { addNewComment, addNewReply } from "./Util";

const ReplyCard = ({
  rep,
  parentId,
  currentUser,
  onDeleteClickInReply,
  onEditClickInReply,
}) => {
  const [content, setContent] = useState(rep.content);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //   console.log("in reply card", rep);
  const { comments, setComments } = useContext(CommentsContext);
//   console.log({ parentId });
  const handleContentChange = (event) => {
    const value = event.target.value;
    if (value !== null && value.trim().length > 0) {
      setContent(value);
    }
  };

  const handleOnReplyClick = () => {
    console.log("in handleOnReplyClick");
    var var1 = addNewReply(
      [...comments],
      "child",
      rep.id,
      parentId,
      currentUser
    );
    setComments(var1);
  };

  const handleOnDeleteClick = () => {
    if (isEditing) {
      console.log("cancel clicked", rep.id);
      setIsEditing(false);
    } else {
      console.log("delete clicked", rep.id);
      setShowModal(true);
      onDeleteClickInReply(rep.id);
    }
  };

  const handleOnEditClick = () => {
    console.log("edit clicked", rep.id);
    setIsEditing(!isEditing);
    onEditClickInReply(rep.id, content);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="reply-card">
      <div className="d-none d-sm-inline-flex">
        <ScoreBtnVertical score={rep.score} />
      </div>
      <div className="d-flex flex-column w-100">
        <div className="current-user mb-2">
          <div>
            <img src={rep?.user?.image?.png} className="user-img me-2" />
            <span className="username">{rep?.user?.username}</span>
            {rep?.user?.username === currentUser?.username && (
              <span className="me-user">you</span>
            )}
            <span className="created-at">{rep?.createdAt}</span>
          </div>
          <div className="d-none d-sm-inline">
            {rep?.user?.username === currentUser?.username ? (
              <EditDeleteBtn
                onDeleteClick={handleOnDeleteClick}
                onEditClick={handleOnEditClick}
                isEditing={isEditing}
              />
            ) : (
              <ReplyBtn onReplyClick={handleOnReplyClick} />
            )}
          </div>
        </div>
        <p>
          {!isEditing && (
            <span className="reply-to">{"@" + rep?.replyingTo + " "}</span>
          )}
          {!isEditing && content}
          {isEditing && (
            <textarea
              className="form-control"
              rows={3}
              value={content}
              onChange={handleContentChange}
            ></textarea>
          )}
        </p>
      </div>
      <div className="d-flex d-sm-none flex-row justify-content-between ">
        <ScoreBtn score={rep.score} />
        {rep?.user?.username === currentUser?.username ? (
          <EditDeleteBtn
            onDeleteClick={handleOnDeleteClick}
            onEditClick={handleOnEditClick}
          />
        ) : (
          <ReplyBtn onReplyClick={handleOnReplyClick} />
        )}
      </div>
      <Modal show={showModal} centered>
        <Modal.Body>
          <h3>Delete Comment</h3>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
              NO, CANCEL
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>
              YES, DELETE
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReplyCard;
