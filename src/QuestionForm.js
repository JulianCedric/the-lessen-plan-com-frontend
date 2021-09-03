import React from 'react';
import './App.css';
import { Form } from 'semantic-ui-react';

class QuestionForm extends React.Component {
    state = {  
        question: ""
    }

    handleChange = e => {
        console.log("User is typing.. ")
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        console.log("User submitted a question.")
        console.log("Current state of question:", this.state.question);
    
        const newQuestion = this.state.question;
        console.log(newQuestion);
        this.props.handleUserSubmit(newQuestion);
        this.setState({ question: "" });
    }

    render() { 
        return (  
            <div className="question-form">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder='Your Question'
                            name='question'
                            value={this.state.question}
                            onChange={this.handleChange}
                        />
                        <Form.Button content="Submit"/>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
 
export default QuestionForm;