import data from "../data.json";

export const initialize = () => {
  if (localStorage.getItem("comments-data")) {
    localStorage.removeItem("comments-data");
  }
  localStorage.setItem("comments-data", JSON.stringify(data));
};

export const getDefaultComments = () => {
  return JSON.parse(localStorage.getItem("comments-data"));
};

export const addNewReply = (comments, type, replyId, parentId, currentUser) => {
  console.log({ type }, { replyId }, { parentId });
  var commentIndex = comments.findIndex((c) => c.id === parentId);
  var curComment = comments[commentIndex];
  var curReplies = curComment.replies;
  console.log("curComment", curComment);
  console.log("curReplies", curReplies);

  var newId = parseFloat(replyId + 0.1);

  var _reply = {
    id: newId,
    content: "",
    createdAt: "Just now",
    replyingTo: curComment?.user?.username,
    score: 0,
    user: currentUser,
    new: true,
    type: "child",
  };
  curReplies = [...curReplies, _reply];
  // console.log("newReplies", newReplies);
  var newComment = {
    ...curComment,
    replies: curReplies,
  };
  // console.log(newComment);
  var newCommentsArray = [...comments];
  newCommentsArray[commentIndex] = newComment;
  var newCommentsArraySorted = newCommentsArray.sort((a, b) => a.id - b.id);
  console.log("newCommentsArraySorted", newCommentsArraySorted);
  return newCommentsArraySorted;
};
export const addNewComment = (comments, type, id, currentUser) => {
  console.log({ comments }, { type }, { id });

  var commentIndex = comments.findIndex((c) => c.id === id);
  var curComment = comments[commentIndex];
  var curReplies = curComment?.replies ?? [];
  console.log("curComment", curComment);
  console.log("curReplies", curReplies);

  var newId;
  if (curReplies.length === 0) {
    newId = parseFloat(id) + parseFloat(0.1);
  } else {
    newId = parseFloat(curReplies[curReplies.length - 1].id) + parseFloat(0.1);
  }

  var _reply = {
    id: newId.toFixed(1),
    content: "",
    createdAt: "Just now",
    replyingTo: curComment?.user?.username,
    score: 0,
    user: currentUser,
    new: true,
  };
  curReplies = [...curReplies, _reply];
  // console.log("newReplies", newReplies);
  var newComment = {
    ...curComment,
    replies: curReplies,
  };
  // console.log(newComment);
  var newCommentsArray = [...comments];
  newCommentsArray[commentIndex] = newComment;
  var newCommentsArraySorted = newCommentsArray.sort((a, b) => a.id - b.id);
  console.log("newCommentsArraySorted", newCommentsArraySorted);
  return newCommentsArraySorted;
};

export const cancelAddComment = (comments, id, parentId) => {
  //   console.log({ comments }, { id }, { parentId });
  var commentIndex = comments.findIndex((c) => c.id === parentId);
  //   console.log({ commentIndex }, comments[commentIndex]);
  var replies = comments[commentIndex].replies;
  //   console.log({ replies });
  var replyIndex = replies.findIndex((r) => r.id === id);
  //   console.log({ replyIndex }, replies[replyIndex]);
  replies = replies.filter((r) => r.id !== id);
  //   console.log({ replies });
  comments[commentIndex].replies = replies;
  //   console.log({ comments });
  return comments;
};

export const updateComment = (comments, type, id, parentId, content) => {
  console.log({ comments }, { type }, { id }, { parentId }, { content });
  var updatedComment = [...comments];
  var commentIndex = comments.findIndex((c) => c.id === parentId);
  var curComment = comments[commentIndex];
  console.log({ curComment });
  var replyIndex = curComment.replies.findIndex((r) => r.id === id);
  var reply = curComment.replies[replyIndex];
  console.log({ reply });
  const updatedReply = {
    content: content,
    createdAt: reply.createdAt,
    id: reply.id,
    replyingTo: reply.replyingTo,
    score: reply.score,
    user: reply.user,
  };
  console.log({ updatedReply });
  curComment.replies[replyIndex] = updatedReply;
  updatedComment[commentIndex] = curComment;
  console.log({ updatedComment });
  updatedComment = updatedComment.sort((a, b) => a.id - b.id);
  return updatedComment;
};

export const deleteComment = (comments, id, parentId) => {
  var commentIndex = comments.findIndex((c) => c.id === parentId);
  var comment = comments[commentIndex];
  var replies = comment.replies;
  replies = replies.filter((r) => r.id !== id);
  comment = {
    ...comment,
    replies: replies,
  };
  comments[commentIndex] = comment;
  //   console.log({ comments });
  return comments;
};
