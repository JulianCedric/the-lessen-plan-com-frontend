import React from 'react';
import './App.css';
import QuestionForm from './QuestionForm';

var aTimeActivities = ["a1", "a2", "a3"];
var bTimeActivities = ["b1", "b2", "b3"];

class Lab extends React.Component {
    state = {  
        aTime: [],
        aTimeStatus: false,
        bTime: [],
        bTimeComplete: [],
        questions: []
    }





    handleUserSubmit = newQuestion => {
        console.log("newQuestion2:", newQuestion);
        console.log("questions BEFORE", this.state.questions);

        let questionsArr = this.state.questions;

        const arr = questionsArr.push(newQuestion);

        this.setState({ questions: arr })
        console.log("questions AFTER", this.state.questions);
    }

    render() { 
        console.log("Current state of 'aTime':", this.state.aTime);
        console.log("Current state of 'aTime':", this.state.BTime);

        return (  
            <div className="lab" style={{ color: 'white' }}>
                <QuestionForm questions={this.state.questions} handleUserSubmit={this.handleUserSubmit}/>
            </div>
        );
    }
}
 
export default Lab;