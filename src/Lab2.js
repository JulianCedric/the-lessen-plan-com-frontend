import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import CreatePage01 from './CreatePage01';

const LESSENPLANS = [
// sample data for testing purposes
    {
        id: 0,
        goal: 'create a web app',
        identity: 'programmer',
        kpiHabit: 'make five GitHub commits per week',
        badHabits: [],
        new: ''
    }
]

class Lab2 extends React.Component {
    state = {  
        lessenPlans: LESSENPLANS,
        renderCreatePage01: false
    }

    handleClick = e => {
        this.setState({ renderCreatePage01: !this.state.renderCreatePage01 })
    }

    render() { 
        return (  
            <div className="lab" style={{ color: 'white' }}>
                { this.state.renderCreatePage01 ? <CreatePage01 /> : <Button onClick={this.handleClick} color='violet' size='massive'>Create New Lessen Plan</Button> }
            </div>
        );
    }
}
 
export default Lab2;