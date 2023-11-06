import React, { useEffect, useState } from "react";
import { useGameContext } from '../context';

function SelectRoundWinner() {
    const { stage, teamNameOne, teamNameTwo, setStage, setRounds, teamOneScore, setTeamOneScore, teamTwoScore, setTeamTwoScore } = useGameContext();

    const addScore = teamName => {
        teamName === teamNameOne ? setTeamOneScore(teamOneScore + 1) : setTeamTwoScore(teamTwoScore + 1);
        setStage('ready')
    }

    return (
        <div id='select-round-winner' className='component'>
            {stage === 'score' ? 
                <div>
                    <h1>Point for the round goes to</h1>
                    <button onClick={() => addScore(teamNameOne)}>{teamNameOne}</button>
                    <button onClick={() => addScore(teamNameTwo)}>{teamNameTwo}</button>
                </div>
                :
                null
            }
        </div>
    );
}

export default SelectRoundWinner;