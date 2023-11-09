import React, { useEffect, useState } from "react";
import { useGameContext } from '../context';

function Timer() {
    const { stage, setStage, timerLength, setTimerLength } = useGameContext();
    const [timeLeft, setTimeLeft] = useState(timerLength);

    useEffect(() => {
        if (stage === 'round') {
            const intervalId = setInterval(() => {
                if (timeLeft > 0) {
                    setTimeLeft(timeLeft - 1);
                } else {
                    clearInterval(intervalId);
                    setStage('score');

                }
            }, 1000);
    
            return () => {
                clearInterval(intervalId);
            };
        } else if (stage === 'ready') {
            setTimeLeft(timerLength);
        }
    }, [stage, timeLeft, setStage, timerLength]);
    
    return (
        <div id='timer' className='component'>
            <h1>Time</h1>
            {stage === 'setup' &&
                <div id='timer-input' class='input'>
                    {timerLength > 1 && <i class="bi bi-dash" onClick={e => { setTimerLength(timerLength - 1) }}></i>}
                        <p>{timerLength}</p>
                    {timerLength < 60 && <i class="bi bi-plus" onClick={e => { setTimerLength(timerLength + 1) }}></i>}
                 </div>
                }
                { 
                    stage !== 'setup' && <p>{timeLeft}</p>
                }
        </div>
    );
}

export default Timer;
