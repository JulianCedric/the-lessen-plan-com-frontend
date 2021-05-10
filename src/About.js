import './App.css';
import React from 'react';
import { Button, Container, Divider, Form } from 'semantic-ui-react';

class About extends React.Component {
    state = {  
        sections: ['1', '2', '3'],
        initial: 0,
        pass: false,
        email: '',
        renderPass: false,
    }

    handleClick = e => {
        this.setState({ initial: 1 })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.email)
    }

    handleSubmit = e => {
        let email = this.state.email

        console.log("this.state.email: ", email)
        let arr = []

        console.log(email.includes("@"))

        if (email.includes("@") && email.includes(".com")) {
            this.setState({renderPass: !this.state.renderPass})
        } else {
            alert("Please enter a valid email address.")
        }
    }
        
    render() { 
        return (  
            <div className='about'>
                <Container textAlign='center'>About</Container>
                <br/>
                <br/>
                <p>
                    {!this.state.renderPass
                        ? "Enter Your Email Address:"
                        : "Pass"
                    }
                </p>
                <div className="email">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Input
                                placeholder='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />     
                            <br/>
                            <br/>
                            <Form.Button inverted color='green' content='+' onClick={this.handleClick} />
                        </Form.Group>
                    </Form>
                </div>
                <br/>    
                <br/>    
            </div>
        );
    }
}
 
export default About; 

// 2021.04.08 - THU:

// "The Process:

// 1) Decide what you want to achieve.
// 2) Try different ways of achieving it until you find one that works for you.
// 3) Do more of what works. Do less of what doesn’t.
// 4) Don’t stop doing it until it stops working.
// 5) Repeat." 