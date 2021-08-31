import React from 'react';
import './App.css';
import QuestionForm from './QuestionForm';

class Lab extends React.Component {
    state = {  
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
        return (  
            <div className="lab" style={{ color: 'white' }}>
                <QuestionForm questions={this.state.questions} handleUserSubmit={this.handleUserSubmit}/>
            </div>
        );
    }
}
 
export default Lab;