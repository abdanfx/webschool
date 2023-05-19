import React from "react";

const CircleBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        background: "#456BD9",
        border: "0.1875em solid #0F1C3F",
        borderRadius: "50%",
        boxShadow: "0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125)",
        height: "20%",
        width: "15%",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
      >
        <circle cx="50" cy="50" r="50" fill="#F44336" />
      </svg>
    </div>
  );
};

export default CircleBackground;