import { useEffect } from "react";
import CommentsHome from "./components/CommentsHome";
import { getDefaultComments, initialize } from "./components/Util";
import CommentsState from "./context/CommentsState";

function App() {
  useEffect(() => {
    initialize();
    // getDefaultComments();
  }, []);

  return (
    <CommentsState>
      <CommentsHome />
    </CommentsState>
  );
}

export default App;
