import React from "react";

export default function Item({ rank, itemObject }) {
  return (
    <tr>
      <td>{rank}</td>
      <td>
        <img src={itemObject.item.imageUrl} alt="" />
      </td>
      <td>{itemObject.item.itemName}</td>
      <td>{itemObject.item.description}</td>
      <td>{itemObject.item.wins}</td>
      <td>{itemObject.item.matchups}</td>
      <td>{`${
        itemObject.item.matchups == 0
          ? 0
          : Math.round(
              (itemObject.item.wins / itemObject.item.matchups) * 1000
            ) / 10
      }%`}</td>
    </tr>
  );
}
