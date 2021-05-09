import './App.css';
import React from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';

class About extends React.Component {
    state = {  
        sections: ['1', '2', '3'],
        initial: 0,
        pass: false
    }

    // I need to create a counter as a button that users click to add 1 to the current number.
    // The number should appear above the 'Increase Number' button. 

    handleClick = e => {
        this.setState({ initial: 1 })
    }

    validator = e => {
        let email = "johndoe@mail.com"
        console.log(email.length)
        let arr = []
        const passOrFail = input => {
            for (let i=0; i<input.length; i++) {
                if ("@" == input[i]) {
                    arr.push("Test Pass")
                } else {
                    console.log("Test Fail")
                }
            }
        }
        console.log(passOrFail(email))
        console.log(arr.join(''))
        if (arr.join('') == "Test Pass") {
            this.setState({pass: !this.state.pass})
        } else {
            console.log("Please enter a valid email address.")
        }
    }

    render() { 
        return (  
            <div className='about'>
                <Container textAlign='center'>About</Container>
            <br/>
            <br/>    
            {this.state.pass
            ? <Button onClick={this.validator} color="green">Test Button</Button> 
            : <Button onClick={this.validator} secondary>Test Button</Button>}
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