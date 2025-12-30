import React from "react";
import { MdOutlineMail } from "react-icons/md";

function JoinList() {
  return (
    <div className="card join-list">
      <label>Join my mailing list</label>
      <div>
        <input type="text" placeholder="Email" />
        <button>
          <MdOutlineMail />
          Join the list
        </button>
      </div>
    </div>
  );
}

export default JoinList;
