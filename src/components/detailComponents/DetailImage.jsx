import React from "react";
import "./DetailScreen.css";
import "../homeComponents/Home.css";

function DetailImage({ image, title }) {
  

  return (
    <div
      className="ad-banner"
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="ad-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default DetailImage;
