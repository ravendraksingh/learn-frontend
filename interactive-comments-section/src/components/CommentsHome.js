import React, { useContext } from "react";
import CommentCard from "./CommentCard";
import CommentsContext from "../context/CommentsContext";
import "./commentshome.css";

const CommentsHome = () => {
  const { comments, setComments } = useContext(CommentsContext);
  const { currentUser } = useContext(CommentsContext);

  return (
    <div className="container main-container">
      {comments?.map((comment) => (
        <CommentCard
          data={comment}
          key={"krw#" + comment.id}
          currentUser={currentUser}
        />
      ))}
      {/* <div>
        <div className="main-card d-flex flex-column justify-content-between flex-sm-row">
          <div className="d-none d-sm-inline-flex">
            <img src={currentUser?.image?.png} className="user-img" />
          </div>
          <textarea className="input-comment"></textarea>
          <div className="d-none d-sm-inline-flex">
            <button className="btn btn-primary btn-sm">SEND</button>
          </div>
          <div className="d-flex w-100 justify-content-between d-sm-none">
            <img src={currentUser?.image?.png} className="user-img" />
            <button className="btn btn-primary btn-sm">SEND</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CommentsHome;
