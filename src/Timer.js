import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const red = '#FF4500';
const blue = '#6495ED';

function Timer() {
    return (
        <div>
            <h1>Timer</h1>

            <CircularProgressbar
                value={77}
                // text={minutes + ':' + seconds}
                text={'77%'}
                styles={buildStyles({
                textColor:'#fff',
                // pathColor:mode === 'work' ? red : green,
                tailColor:'rgba(255,255,255,.2)',
                })} 
            />

        </div>
    )
}
 
export default Timer;