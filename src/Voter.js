import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import RerollBox from "./RerollBox";
import VoteBox from "./VoteBox";
import apilink from "./apilink";

export default function Voter() {
  const [matchup, setMatchup] = useState();

  const setNewMatchup = async () => {
    axios.get(`${apilink}/matchups`).then((response) => {
      setMatchup(response.data);
    });
  };

  const resolveMatchup = (winnerIndex) => {
    return () => {
      setMatchup(null);
      axios.put(`${apilink}/matchups/${matchup.id}/${winnerIndex}`);
      setNewMatchup();
    };
  };

  useEffect(() => {
    setNewMatchup();
  }, []);

  if (matchup)
    return (
      <>
        <div className="infobox">
          <div className="infobox-header">Vote</div>
          <div className="infobox-body">
            Vote for the weapon you think is best
          </div>
        </div>
        <div className="voter">
          <VoteBox
            itemObject={matchup.contestants[0]}
            click={resolveMatchup(0)}
          />
          <RerollBox reroll={resolveMatchup(2)} />
          <VoteBox
            itemObject={matchup.contestants[1]}
            click={resolveMatchup(1)}
          />
        </div>
      </>
    );
  else return <p>Loading</p>;
}
