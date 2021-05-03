import './App.css';
import React from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';

class About extends React.Component {
    state = {  
        sections: ['1', '2', '3'],
        initial: 0
    }

    // I need to create a counter as a button that users click to add 1 to the current number.
    // The number should appear above the 'Increase Number' button. 

    handleClick = e => {
        this.setState({ initial: 1 })
    }

    render() { 
        return (  
            <div className='about'>
                <Container textAlign='center'>About</Container>
                <div>
                    <p>The Process</p>
                </div>
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