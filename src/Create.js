import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class Create extends React.Component {
    state = {  
        id: 1,
        user_id: 1,
        type: "",
        habitDesc: "",
        habitBad: false,
        habitLoopItemA: "",
        habitLoopItemB: "",
        habitLoopItemC: "",
        habitLoopItemD: "",
        habitTracker: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        let obj = this.state
        this.props.create(obj)
        this.props.renderCreate()
    }

    render() { 
        return (  
            <div>
                <p>Create a New Lessen Plan for your: </p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder="e.g. Morning Routine"
                            name="type"
                            value={this.state.type}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Button content='Start' />
                </Form>
            </div>
        );
    }
}
 
export default Create;