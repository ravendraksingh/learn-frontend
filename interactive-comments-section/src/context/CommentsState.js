import React, { useEffect, useState } from "react";
import CommentsContext from "./CommentsContext";
import data from "../data.json";
import { getDefaultComments } from "../components/Util";

const CommentsState = (props) => {
  //   const [comments, setComments] = useState(data.comments);
  //   const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  console.log({ comments }, { currentUser });

  useEffect(() => {
    var _data = getDefaultComments();
    console.log({ _data });
    if (_data !== null) {
      setComments(_data.comments);
      setCurrentUser(_data.currentUser);
    }
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
};

export default CommentsState;
