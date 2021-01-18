import React from 'react';
import { Form } from 'semantic-ui-react';
import BadLoop from './BadLoop';
import GoodLoop from './GoodLoop';

class CreateForm extends React.Component {
    state = {  
        desc: "",
        type: "",
        streak: 0,
        bad: false,
        good: false,
        cue: "",
        craving: "",
        response: "",
        reward: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    handleClickBad = e => {
        this.setState({ bad: !this.state.bad, good: this.state.bad })
    }

    handleClickGood = e => { 
        this.setState({ good: !this.state.good, bad: this.state.good })
    }

    render() { 
        console.log(this.state)
        return (  
            <div className="create-form">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='Your Habit..'
                            name='desc'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />     
                        <Form.Button inverted color='red' content='-' onClick={this.handleClickBad}/>
                        <Form.Button inverted color='green' content='+' onClick={this.handleClickGood} />
                    </Form.Group>
                </Form>
                <br/>
                { this.state.good ? <GoodLoop handleChange={this.handleChange} state={this.state} /> : null }
                { this.state.bad ? <BadLoop handlechange={this.handleChange} state={this.state} /> : null }
            </div>
        );
    }
}
 
export default CreateForm;