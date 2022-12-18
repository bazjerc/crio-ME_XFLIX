import React from "react";

const VideoEmbed = function (props) {
  return (
    <iframe
      title={"Embedded Player"}
      src={props.src}
      style={{
        width: "100%",
        maxHeight: "600px",
        minHeight: "350px",
        height: "50vw",
      }}
      frameBorder={"0"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoEmbed;
