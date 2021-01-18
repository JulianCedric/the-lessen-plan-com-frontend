import React from 'react';
import { Form } from 'semantic-ui-react';

class BadLoop extends React.Component {
    state = {  }

    render() { 
        console.log(this.props.state)
        return (  
            <div>
                <p>Question 1 of 4:</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='...'
                            name='cue'
                            value={this.state.name}
                            onChange={this.props.handleChange}
                        />     
                        <Form.Button inverted color='red' content='-' onClick={this.handleClickBad}/>
                    </Form.Group>
                </Form>
                    
            </div>
        );
    }
}
 
export default BadLoop;