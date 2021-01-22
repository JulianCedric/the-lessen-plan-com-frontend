import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class Update extends React.Component {
    state = {  
        id: 1,
        user_id: 1,
        type: "",
        habitDesc: "",
        habitBad: true,
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
        let bad = this.state.habitBad
        this.props.updateHabitDesc(id, desc, bad)
    }

    handleClickBad = e => {
        // this.props.badHabit()
        console.log('Under Construction')
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

                <br/>

                <p>Step 2. For each behavior, select "-" if it's bad, or "+" if it's good:</p>
                <span>
                    <Button onClick={this.handleClickBad}>-</Button>
                    <Button onClick={this.handleClickGood}>+</Button>
                </span>


            </div>
        );
    }
}
 
export default Update;