import React from "react";

function Social({ color, Icon, link, turnLeft }) {
  return (
    <div
      className={`social ${turnLeft ? "turn-left" : "turn-right"}`}
      style={{ background: color }}
    >
      {Icon}
    </div>
  );
}

export default Social;
