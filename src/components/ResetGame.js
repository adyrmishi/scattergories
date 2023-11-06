import React from "react";
import { useGameContext } from '../context';
import "bootstrap-icons/font/bootstrap-icons.css";

function ResetGame() {
    const { setStage, setTimerLength, setTeamNameOne, setTeamNameTwo, setRounds, setCurrentRound } = useGameContext();
    const resetGame = () => {
        setStage('setup');
        setTimerLength(30);
        setTeamNameOne("");
        setTeamNameTwo("");
        setRounds(10);
        setCurrentRound(0);
    };

    return (
        <div id='restart' class='component' onClick={resetGame}>
            <p>Reset</p>
            <i class="bi bi-arrow-repeat"></i>
        </div>
    );
}

export default ResetGame;