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

    handleChangeStep1 = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitStep1 = e => {
        let id = this.state.user_id
        let desc = this.state.habitDesc
        let bad = this.state.habitBad
        this.props.updateHabitDesc(id, desc, bad)
    }

    handleChangeStep3 = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitStep3 = e => {
        let id = this.state.user_id
        let cue = this.state.habitLoopItemA
        this.props.updateHabitLoopItemA(id, cue)
    }

    handleClickBad = e => {
        // this.props.badHabit()
        console.log('Under Construction')
    }

    render() { 
        return (  
            <div className="Lab">

                <p>Step 1. Make a list of your daily morning habits:</p>
                <Form onSubmit={this.handleSubmitStep1}>
                    <Form.Group>
                        <Form.Input 
                            placeholder="e.g. Eating chips for breakfast."
                            name="habitDesc"
                            value={this.state.habitDesc}
                            onChange={this.handleChangeStep1}
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

                <br/>

                <p>Step 3. Create a new, personalized plan for eliminating your bad habit:</p>
                <Form onSubmit={this.handleSubmitStep3}>
                    <Form.Group>
                        <Form.Input 
                            placeholder="e.g. Make it invisible."
                            name="habitLoopItemA"
                            value={this.state.habitLoopItemA}
                            onChange={this.handleChangeStep3}
                        />
                    </Form.Group>
                    <Form.Button content='Submit' />
                </Form>

            </div>
        );
    }
}
 
export default Update;