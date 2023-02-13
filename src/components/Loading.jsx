import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="my-96 mx-auto h-32 w-32 sm:grid sm:grid-cols-1 sm:place-items-center">
      <ReactLoading
        type="spinningBubbles"
        color="#2dd4bf"
        height={"50%"}
        width={"50%"}
      />
    </div>
  );
};

export default Loading;
