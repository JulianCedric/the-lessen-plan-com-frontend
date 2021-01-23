import React from 'react';
import { Button, Form, Tab } from 'semantic-ui-react';

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
        const panes = [
            { menuItem: 'Step 1', render: () => <Tab.Pane style={{ width: '470px'}} inverted><h3>Make a list of your daily morning habits:</h3>
            <Form onSubmit={this.handleSubmitStep1}>
                <Form.Group>
                    <Form.Input 
                        placeholder="e.g. Eating chips for breakfast."
                        name="habitDesc"
                        value={this.state.habitDesc}
                        onChange={this.handleChangeStep1}
                        style={{ width: '400px' }}
                    />
                </Form.Group>
                <Form.Button content='Submit' color='blue' style={{ width: '400px' }}/>
            </Form></Tab.Pane> },
            { menuItem: 'Step 2', render: () => <Tab.Pane style={{ width: '470px'}} inverted><h3>Select "-" if it's a bad habit, or "+" if it's good:</h3>
            <span>
                <Button style={{ width: '180px' }} color='red' onClick={this.handleClickBad}>-</Button>
                <Button style={{ width: '180px' }} color='green' onClick={this.handleClickGood}>+</Button>
            </span></Tab.Pane> },
            { menuItem: 'Step 3', render: () => <Tab.Pane style={{ width: '470px' }} inverted ><h3>Create a plan for eliminating your bad habit:</h3>
            <Form onSubmit={this.handleSubmitStep3}>
                <Form.Group>
                    <Form.Input 
                        placeholder="e.g. Make it invisible."
                        name="habitLoopItemA"
                        value={this.state.habitLoopItemA}
                        onChange={this.handleChangeStep3}
                        style={{ width: '400px' }}
                    />
                </Form.Group>
                <Form.Button content='Submit' color='blue' style={{ width: '400px' }}/>
            </Form></Tab.Pane> },
          ]
        return (  
            <div>

                <br/>
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            <div className="update">

                

                <br/>

                

                <br/>

                

            </div>
            </div>
        );
    }
}
 
export default Update;