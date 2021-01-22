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
                <hr/>
                <br/>
                <div className="create">
                    
                    <h3>What would you like it's title to be?</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Input 
                                placeholder="e.g. Morning Routine"
                                name="type"
                                value={this.state.type}
                                onChange={this.handleChange}
                                style={{ width: '500px' }}
                            />
                        </Form.Group>
                        <Form.Button color='blue' content='Create' style={{ width: '500px' }}/>
                    </Form>
                </div>
            </div>
        );
    }
}
 
export default Create;