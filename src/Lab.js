import React from 'react';
import './App.css';
import MyLessenPlans from './MyLessenPlans';

const LESSENPLANS = [
    {
        id: 1,
        title: "Deep Work Session",
        duration: 90
    },
    {
        id: 2,
        title: "Coding Practice",
        duration: 30
    }
];

class Lab extends React.Component {
    state = {  
        myLessenPlans: LESSENPLANS
    }

    render() { 
        console.log("this.state.myLessenPlans:", this.state.myLessenPlans)
        return (  
            <div className="lab" style={{ color: 'white' }}>
                <MyLessenPlans myLessenPlans={this.state.myLessenPlans} />
            </div>
        );
    }
}
 
export default Lab;