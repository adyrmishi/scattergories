import React, { useState, createContext, useContext } from 'react';
const GameContext = createContext();
export function useGameContext() {
    return useContext(GameContext);
}

export function Provider({children}) {
    const [stage, setStage] = useState("setup");
    const [timerLength, setTimerLength] = useState(30);
    const [teamNameOne, setTeamNameOne] = useState("");
    const [teamNameTwo, setTeamNameTwo] = useState("");
    const [rounds, setRounds] = useState(10);
    const [currentRound, setCurrentRound] = useState(0);
    const [teamOneScore, setTeamOneScore] = useState(0);
    const [teamTwoScore, setTeamTwoScore] = useState(0);
    
    return (
    <GameContext.Provider value={{stage, setStage, timerLength, setTimerLength, teamNameOne, setTeamNameOne, teamNameTwo, setTeamNameTwo, rounds, setRounds, currentRound, setCurrentRound, teamOneScore, setTeamOneScore, teamTwoScore, setTeamTwoScore}}>
        {children}
    </GameContext.Provider>

    )
}