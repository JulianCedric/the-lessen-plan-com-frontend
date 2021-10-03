import React, {useState} from 'react';
import './App.css';
import MyLessenPlans from './MyLessenPlans';
import Pomodoro from './Pomodoro';
import Timer from './Timer';
import Settings from './Settings';
import SettingsContext from "./SettingsContext";

const LESSENPLANS = [
    {
        id: 1,
        title: "Deep Work Session",
        duration: 90,
        steps: "tbd"
    },
    {
        id: 2,
        title: "Coding Practice",
        duration: 30,
        steps: "tbd"
    }
];

class Lab extends React.Component {
    state = {  
        myLessenPlans: LESSENPLANS
    }

    // const [showSettings, setShowSettings] = useState(initialState: false);

    render() { 
        console.log("this.state.myLessenPlans:", this.state.myLessenPlans)
        return (  
            <div className="lab" style={{ color: 'white' }}>
                {/* <MyLessenPlans myLessenPlans={this.state.myLessenPlans} />
                <Pomodoro /> */}
                {/* <SettingsContext.Provider value={{
                    // showSettings,
                    // setShowSettings,
                    // workMinutes,
                    // breakMinutes,
                    // setWorkMinutes,
                    // setBreakMinutes,
                }}> */}
                    {/* {showSettings ? <Settings /> : <Timer />} */}
                {/* <SettingsContext.Provider /> */}
                <Settings />
                <Timer />
            </div>
        );
    }
}
 
export default Lab;