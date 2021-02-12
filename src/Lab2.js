import React from 'react';
import './App.css';
import { Breadcrumb, BreadcrumbDivider, Button } from 'semantic-ui-react';
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

                <Breadcrumb size='huge'>
                    <Breadcrumb.Section active>Step 1</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section link>Step 2</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section link>Step 3</Breadcrumb.Section>
                </Breadcrumb>

                <br/>
                <br/>
                <br/>

                { this.state.renderCreatePage01 ? <CreatePage01 /> : <Button onClick={this.handleClick} color='violet' size='massive'>Create New Lessen Plan</Button> }


            </div>
        );
    }
}
 
export default Lab2;