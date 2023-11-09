import React, { useEffect } from "react";
import { useGameContext } from '../context';
import "bootstrap-icons/font/bootstrap-icons.css";
import { supabase } from '../client';

function ResetGame() {
    const { stage, setStage, setTimerLength, setTeamNameOne, setTeamNameTwo, setRounds, setCurrentRound, setTeamOneScore, setTeamTwoScore } = useGameContext();

    const resetAllCategories = async () => {
        const { data } = await supabase.rpc('reset_all');
    }

    const resetGame = () => {
        setStage('setup');
        setTimerLength(30);
        setTeamNameOne("");
        setTeamNameTwo("");
        setRounds(10);
        setCurrentRound(0);
        setTeamOneScore(0);
        setTeamTwoScore(0);
        resetAllCategories();
    };

    useEffect(() => {
        if (stage === 'setup') {
            resetAllCategories();
        }
    }, [stage]);

    return (
        <div id='reset' className='component' onClick={resetGame}>
            <p>Reset</p>
            <i className="bi bi-arrow-repeat"></i>
        </div>
    );
}

export default ResetGame;
