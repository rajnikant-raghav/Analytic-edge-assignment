import React from "react";
// import Loading from './Settings.gif'

const Loading = () => {
  return (
    <div className="loading_container">
      <img src={require("./Settings.gif")} alt="" />
    </div>
  );
};

export default Loading;
