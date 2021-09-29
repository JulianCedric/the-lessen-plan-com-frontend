import React from 'react';
import './App.css';
import MyLessenPlans from './MyLessenPlans';

class Lab extends React.Component {
    state = {  
        aTime: [],
        aTimeStatus: false,
        bTime: [],
        bTimeComplete: [],
        questions: []
    }

    render() { 
        console.log("Current state of 'aTime':", this.state.aTime);
        console.log("Current state of 'aTime':", this.state.BTime);

        return (  
            <div className="lab" style={{ color: 'white' }}>
                <MyLessenPlans questions={this.state.questions} handleUserSubmit={this.handleUserSubmit}/>
            </div>
        );
    }
}
 
export default Lab;