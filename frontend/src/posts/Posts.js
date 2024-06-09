import React, { useState } from "react";
import CardY from "../composantsApp/CardY";
import Comment from "../composantsApp/Comment";

function Posts(props) {
  const [commentbox, setcommentbox] = useState("hidden");
  const handleshowcomment = () => {
    setcommentbox("");
  };
  const removecommentbox = () => {
    setcommentbox("hidden");
  };
  return (
    <div className="flex flex-row w-full ">
      <div className="w-full md:w-2/3 flex flex-col m-5 gap-4 justify-center items-center">
        <CardY showcomment={handleshowcomment} />
        <CardY showcomment={handleshowcomment} />
        <CardY showcomment={handleshowcomment} />
        <CardY showcomment={handleshowcomment} />
        <CardY showcomment={handleshowcomment} />
        <CardY showcomment={handleshowcomment} />
      </div>
      <div className="hidden md:block w-1/3 justify-center items-center border-l border-spacing-1 border-slate-600 p-2 shadow-slate-700 shadow-lg">
        <Comment />
      </div>
      <div
        className={`${commentbox} md:hidden w-full min-h-screen fixed  top-0 left-0  justify-center items-center p-2 pt-10 bg-slate-200`}
      >
        <Comment />
        <button>
          <img
            src="images/cancel.svg"
            onClick={removecommentbox}
            className="w-6 h-6 absolute top-2 right-2 z-50 cursor-pointer"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Posts;
