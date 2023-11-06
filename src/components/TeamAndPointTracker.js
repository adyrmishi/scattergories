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
                placeholder="Enter team one name"
                value={teamNameOne}
                onChange={(e) => setTeamNameOne(e.target.value)}
                class="w-4/5 bg-gray-100 text-myblue mt-2 p-1 focus:outline-none focus:ring-myblue"
              />
              <input
                type="text"
                id="team-two-name"
                name="teamNameTwo"
                placeholder="Enter team two name"
                value={teamNameTwo}
                onChange={(e) => setTeamNameTwo(e.target.value)}
                class="w-4/5 bg-gray-100 text-gray-900 mt-2 p-1 focus:outline-none focus:shadow-outline"
              />
            <input type="submit" class="text-white bg-myblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Submit" />
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
