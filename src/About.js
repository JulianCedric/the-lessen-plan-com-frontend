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
        }

        //     for (let i=0; i<email.length; i++) {
        //         if ("@" == email[i]) {
        //             arr.push("Test Pass")
        //         } else {
        //             console.log("Test Fail")
        //         }
        //     }
        
        // if (arr.join('') == "Test Pass") {
        //     this.setState({renderPass: !this.state.renderPass})
        // } else {
        //     console.log("Please enter a valid email address.")
        // }
    }

    // validator = e => {
    //     let email = "johndoe@mail.com"
    //     console.log(email.length)
    //     let arr = []
    //     const passOrFail = input => {
    //         for (let i=0; i<input.length; i++) {
    //             if ("@" == input[i]) {
    //                 arr.push("Test Pass")
    //             } else {
    //                 console.log("Test Fail")
    //             }
    //         }
    //     }
    //     console.log(passOrFail(email))
    //     console.log(arr.join(''))
    //     if (arr.join('') == "Test Pass") {
    //         this.setState({pass: !this.state.pass})
    //     } else {
    //         console.log("Please enter a valid email address.")
    //     }
    // }

    render() { 
        return (  
            <div className='about'>
            //     <Container textAlign='center'>About</Container>
            <br/>
            <br/>
            <p>
                {!this.state.renderPass
                    ? "Enter Your Email Address:"
                    : "Pass"
                }
            </p>

            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />     
                    <br/>
                    <Form.Button inverted color='green' content='+' onClick={this.handleClick} />
                </Form.Group>
            </Form>
            
            
            <br/>    
            <br/>    
            {/* {this.state.pass
            ? <Button onClick={this.validator} color="green">Test Button</Button> 
            : <Button onClick={this.validator} secondary>Test Button</Button>} */}
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