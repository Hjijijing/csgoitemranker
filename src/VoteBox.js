import React from "react";

export default function VoteBox({ itemObject, click }) {
  return (
    <div className="votebox voter-element">
      <div className="element-header">{itemObject.item.itemName}</div>
      <div className="element-body">
        <img src={itemObject.item.imageUrl} alt="" />
        {itemObject.item.description}
      </div>
      <div className="element-footer">
        <button className="voteboxbutton" onClick={click}>
          Choose
        </button>
      </div>
    </div>
  );
}
