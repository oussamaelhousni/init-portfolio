import React from "react";

function Social({ color, Icon, link, turnLeft }) {
  return (
    <div
      className={`social ${turnLeft ? "turn-left" : "turn-right"}`}
      style={{ background: color, border: "2px solid red" }}
    >
      {Icon}
    </div>
  );
}

export default Social;
