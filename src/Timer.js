import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Timer() {
    return (
        <div>
            <h1>Timer</h1>
            <CircularProgressbar value={77} text={`${77}%`} />;
        </div>
    )
}
 
export default Timer;