import React from 'react';
import './App.css';
import MyLessenPlans from './MyLessenPlans';
import Pomodoro from './Pomodoro';
import Lab2 from './Lab2';

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

    render() { 
        return (  
            <div className="lab" style={{ color: 'white' }}>
                {/* <MyLessenPlans myLessenPlans={this.state.myLessenPlans} /> */}
                {/* <Pomodoro /> */}
                <Lab2 />
            </div>
        );
    }
}
 
export default Lab;