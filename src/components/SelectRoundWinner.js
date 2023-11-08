import React from "react";
import { useGameContext } from '../context';

function SelectRoundWinner() {
    const { stage, teamNameOne, teamNameTwo, setStage, currentRound, rounds, teamOneScore, setTeamOneScore, teamTwoScore, setTeamTwoScore } = useGameContext();

    const addScore = teamName => {
        teamName === teamNameOne ? setTeamOneScore(teamOneScore + 1) : setTeamTwoScore(teamTwoScore + 1);
        currentRound === rounds ? setStage('over') : setStage('ready');
    }

    return (
        <div>
            {stage === 'score' ? 
                <div id='select-round-winner' className='component'>
                    <h2>Point goes to</h2>
                    <div id='teams-container'>
                        <button onClick={() => addScore(teamNameOne)}>{teamNameOne}</button>
                        <button onClick={() => addScore(teamNameTwo)}>{teamNameTwo}</button>
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}

export default SelectRoundWinner;