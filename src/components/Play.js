import React from "react";
import { useGameContext } from '../context'
import "bootstrap-icons/font/bootstrap-icons.css";
import ResetGame from "./ResetGame";

function Play() {
    const { stage, setStage } = useGameContext();

    const progressGame = stage => {
        switch(stage) {
            case 'setup':
                window.alert('Fill in team names');
                break;
            case 'ready':
                setStage('round');
                break;
            case 'round':
                setStage('ready');
                break;
            default:
                break;
        }
    }

    return (
        <div id='play' class='component' onClick={() => progressGame(stage)}>
            <h1>Play</h1>
            <i class="bi bi-play-fill"></i>        
        </div>
    );
}

export default Play;