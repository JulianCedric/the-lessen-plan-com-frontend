import React from 'react';
import './App.css';
import ReactSlider from 'react-slider';
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
// import BackButton from "./BackButton";
import Timer from './Timer';

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return(
    <div>
        <Timer />
        <br/>
        <br/>
      {/* <label>work: {settingsInfo.workMinutes}:00</label> */}
      <label>work minutes: :00</label>

      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        // value={settingsInfo.workMinutes}
        value={45}
        // onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      {/* <label>break: {settingsInfo.breakMinutes}:00</label> */}
      <label>break minutes: :00</label>

      {/* <ReactSlider
        className={'slider-green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        // value={settingsInfo.breakMinutes}
        value={77}
        // onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      /> */}
      {/* <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div> */}

    </div>
  );
}

export default Settings;