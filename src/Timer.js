import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import {useContext, useState, useEffect, useRef} from "react";
import SettingsContext from "./SettingsContext";

const red = '#FF4500';
const blue = '#6495ED';

function Timer() {
    const settingsInfo = useContext(SettingsContext);

    return (
        <div className='timer'>
            <h1>Timer</h1>

            <CircularProgressbar
                value={77}
                // text={minutes + ':' + seconds}
                text={'77%'}
                styles={buildStyles({
                textColor:'#fff',
                pathColor: 'cornflowerblue',
                // pathColor:mode === 'work' ? red : green,
                tailColor:'rgba(255,255,255,.2)',
                })} 
            />
            <div style={{marginTop:'20px'}}>
                <PlayButton />
                <PauseButton />
            </div>
            <div style={{marginTop:'20px'}}>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />    
            </div>
        </div>
    )
}
 
export default Timer;