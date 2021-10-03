import React, {useState} from 'react';
import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";

function Lab2() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
      <div>
        <Settings />
        <Timer />
        {/* <SettingsContext.Provider value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes
        }}> */}
        {/* {showSettings ? <Settings /> : <Timer />} */}
        {/* </SettingsContext.Provider> */}
      </div>
  );
}

export default Lab2;