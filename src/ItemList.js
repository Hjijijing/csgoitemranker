import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item.js";
import axios from "axios";
import apilink from "./apilink";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [info, setInfo] = useState({
    totalMatchups: 0,
    mean: 0,
  });

  useEffect(() => {
    axios.get(`${apilink}/items`).then((response) => {
      setItems(
        response.data.sort((a, b) => {
          if (b.item.matchups == 0) return -1;
          let sort =
            b.item.wins / b.item.matchups - a.item.wins / a.item.matchups;
          if (sort == 0) sort = b.item.matchups - a.item.matchups;
          return sort;
        })
      );
    });
  }, []);

  useEffect(() => {
    axios.get(`${apilink}/info`).then((response) => {
      setInfo(response.data);
    });
  }, [items]);

  console.log(items);
  return (
    <>
      <div className="infobox">
        <div className="infobox-header">Rankings</div>
        <div className="infobox-body">{`${
          info.totalMatchups
        } total votes. Average of ${
          Math.round(info.mean * 10) / 10
        } votes per weapon.`}</div>
      </div>
      <div className="itemlist">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Wins</th>
              <th>Matchups</th>
              <th>Winrate</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <Item
                  className="item"
                  rank={index + 1}
                  itemObject={item}
                  key={item.id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
