import React, { useState } from "react";
import { useGameContext } from '../context'

function TeamAndPointTracker() {
  const { stage, setStage, teamNameOne, teamNameTwo, setTeamNameOne, setTeamNameTwo, teamOneScore, teamTwoScore } = useGameContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeamNameOne(e.target.teamNameOne.value);
    setTeamNameTwo(e.target.teamNameTwo.value);
    setStage("ready")
  };

  return (
    <div id="team-and-point-tracker" className="component">
      {stage === "setup" ? (
        <div id="team-names-form">
          <h1>Enter your team names</h1>
          <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="team-one-name"
                name="teamNameOne"
                placeholder="Enter team name"
                value={teamNameOne}
                onChange={(e) => setTeamNameOne(e.target.value)}
                class="border-b border-coral py-2 appearance-none bg-transparent w-4/5 text-coral mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
              <input
                type="text"
                id="team-two-name"
                name="teamNameTwo"
                placeholder="Enter team name"
                value={teamNameTwo}
                onChange={(e) => setTeamNameTwo(e.target.value)}
                class="border-b border-coral py-2 appearance-none bg-transparent w-4/5 text-coral mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <table id="points">
          <thead>
            <tr>
              <th>{teamNameOne}</th>
              <th>{teamNameTwo}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{teamOneScore}</td>
              <td>{teamTwoScore}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TeamAndPointTracker;
