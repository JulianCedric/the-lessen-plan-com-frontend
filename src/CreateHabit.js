import React from 'react';
import './App.css';
import { Button, Form } from 'semantic-ui-react';

class CreateHabit extends React.Component {
    state = { 
        habit: '', 
        submittedHabit: ''
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = () => {
        const { habit } = this.state
        this.setState({ submittedHabit: habit })
    }

    render() { 
        console.log("Current state of habit:", this.state.habit);
        console.log("Current state of submittedHabit:", this.state.submittedHabit);
        const { name, habit, submittedName, submittedHabit } = this.state
        return (
            <div>
                <p>Test - CreateHabit</p>
                <Form onSubmit={this.handleChange}>
                    <Form.Group>
                        <Form.Input
                            placeholder='Habit'
                            name='habit'
                            value={habit}
                            onChange={this.handleChange}
                        />
                        <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
 
export default CreateHabit;