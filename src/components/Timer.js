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
    }, [stage, timeLeft]);
    
    return (
        <div id='timer' className='component'>
            <h1>Time</h1>
                { stage === 'setup' && <input
                    type='number'
                    min='20'
                    max='60'
                    value={timerLength}
                    onChange={(e) => setTimerLength(e.target.value)}/>
                }
                { 
                    stage !== 'setup' && <p>{timeLeft}</p>
                }
        </div>
    );
}

export default Timer;
