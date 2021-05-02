import React from "react";

export default function RerollBox({ reroll }) {
  return (
    <div className="rerollbox voter-element">
      <div className="element-header">Don't know</div>
      <div className="element-body">Reroll options</div>
      <div className="element-footer">
        <button className="voteboxbutton" onClick={reroll}>
          Reroll
        </button>
      </div>
    </div>
  );
}
