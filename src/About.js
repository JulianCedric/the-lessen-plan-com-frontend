import './App.css';
import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

class About extends React.Component {
    state = {  
        sections = ['1', '2', '3']
    }

    render() { 
        return (  
            <div className='about'>
                <Container textAlign='center'>About</Container>
                <br></br>
                <div class="grid-container">
                    <div>One</div>
                    <div>Two</div>
                    <div>Three</div>
                    <div>Four</div>
                    <div>Five</div>
                    <div>Six</div>
                    <div>Seven</div>
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