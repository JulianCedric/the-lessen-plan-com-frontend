import React from 'react';
import './App.css';
import { Breadcrumb, BreadcrumbDivider, Button } from 'semantic-ui-react';

const LESSENPLANS = [
// sample data for testing purposes
    {
        id: 0,
        goal: 'create a web app',
        identity: 'programmer',
        kpiHabit: 'make five GitHub commits per week',
        badHabits: [],
        new: '',
        changes: '',
        tracker: true
    }
]

// Updates - 2021.03.12 - FRI:

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
                    <Breadcrumb.Section active>Step 1. Noticing</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section link>Step 2. Wanting</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section link>Step 3. Doing</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section link>Step 4. Liking</Breadcrumb.Section>
                </Breadcrumb>

                <br/>
                <br/>
                <p>*Draft* TheLessenPlan is an app that helps us do less of what isn't working so that we can do more of what is. </p> 
                <p>How? By providing us with a systematic approach to identifying those things that aren’t working, </p> 
                <p>and then coupling that with a systematic plan for eliminating those inefficiencies.</p>

                <br/>
                <br/>
                <br/>

                {/* { this.state.renderCreatePage01 ? <CreatePage01 /> : <Button onClick={this.handleClick} color='violet' size='massive'>Create New Lessen Plan</Button> } */}

                <br/>
                <br/> 

                <Button secondary>Concept</Button>


            </div>
        );
    }
}
 
export default Lab2;