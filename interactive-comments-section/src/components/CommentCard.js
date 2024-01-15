import React, { Fragment, useContext } from "react";
import ReplyBtn from "./ReplyBtn";
import ReplyCard from "./ReplyCard";
import ScoreBtn from "./ScoreBtn";
import ScoreBtnVertical from "./ScoreBtnVertical";
import "./commentcard.css";
import NewComment from "./NewComment";
import CommentsContext from "../context/CommentsContext";
import {
  addNewComment,
  cancelAddComment,
  deleteComment,
  updateComment,
} from "./Util";

const CommentCard = ({ data, currentUser }) => {
  //   console.log({ data }, { currentUser });
  const { createdAt, id, replies, score, user } = data;
  const { comments, setComments } = useContext(CommentsContext);

  const handleNewCommentAdd = () => {
    // console.log("handleNewCommentAdd id=", id);
    var var1 = addNewComment([...comments], "reply", id, currentUser);
    setComments(var1);
  };

  const handleNewCommentCancel = (replyId) => {
    // console.log("handleNewCommentCancel clicked", replyId);
    var var2 = cancelAddComment([...comments], replyId, id);
    setComments(var2);
  };

  const handleNewCommentSubmit = (replyId, content) => {
    var var3 = updateComment([...comments], "reply", replyId, id, content);
    // console.log({ var3 });
    setComments(var3);
  };

  const handleDeleteInReplyCard = (replyId) => {
    console.log("handleDeleteInReplyCard clicked. replyId", replyId, { id });
    var var4 = deleteComment([...comments], replyId, id);
    setComments(var4);
  };

  const handleEditInReplyCard = (replyId, content) => {
    console.log(
      "handleEditInReplyCard clicked. replyId",
      replyId,
      { id },
      { content }
    );
    var var5 = updateComment([...comments], "orig", replyId, id, content);
    setComments(var5);
  };

  return (
    <Fragment>
      <div className="comment-card">
        <div className="d-flex flex-direction-row justify-content-between mx-0">
          <div className="d-none d-sm-inline-flex">
            <ScoreBtnVertical score={score ?? 0} />
          </div>
          <div className="d-inline-flex d-sm-none">
            <ScoreBtn score={score ?? 0} />
          </div>
          <div className="d-inline-flex d-sm-none">
            <ReplyBtn onReplyClick={handleNewCommentAdd} />
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-between mx-0">
            <div className="current-user mb-2">
              <img src={user?.image?.png} className="user-img me-2" />
              <span className="username">{user?.username}</span>
              <span className="created-at">{createdAt}</span>
            </div>
            <div className="d-none d-sm-inline">
              <ReplyBtn onReplyClick={handleNewCommentAdd} />
            </div>
          </div>
          <p>{data?.content}</p>
        </div>
      </div>
      {replies.length > 0 &&
        replies
          ?.sort((a, b) => a.id - b.id)
          .map((rep, index) => {
            if (rep?.new) {
              return (
                <NewComment
                  currentUser={currentUser}
                  data={rep}
                  parentId={data.id}
                  onCancelClick={() => handleNewCommentCancel(rep.id)}
                  onSendClick={(content) =>
                    handleNewCommentSubmit(rep.id, content)
                  }
                />
              );
            } else {
              return (
                <ReplyCard
                  rep={rep}
                  parentId={id}
                  currentUser={currentUser}
                  key={"ung#" + rep.id}
                  onDeleteClickInReply={() => handleDeleteInReplyCard(rep.id)}
                  onEditClickInReply={(replyId, content) =>
                    handleEditInReplyCard(replyId, content)
                  }
                />
              );
            }
          })}
    </Fragment>
  );
};

export default CommentCard;
