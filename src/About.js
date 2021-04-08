import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

class About extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className='about'>
                <Container textAlign='center'>About</Container>
                <br></br>
                <Container textAlign='left'>*See notes below: 'Process'</Container>
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