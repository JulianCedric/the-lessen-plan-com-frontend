import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class Update extends React.Component {
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
        let id = this.state.user_id
        let desc = this.state.habitDesc
        this.props.updateHabitDesc(id, desc)
    }

    render() { 
        return (  
            <div className="Lab">
                <p>Step 1. Make a list of your daily morning habits:</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder="e.g. Eating chips for breakfast."
                            name="habitDesc"
                            value={this.state.habitDesc}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Button content='Submit' />
                </Form>
            </div>
        );
    }
}
 
export default Update;