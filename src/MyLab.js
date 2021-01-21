import React from 'react';
import { Button, Form, Grid, Image, Reveal } from 'semantic-ui-react';
import HabitLoop from './HabitLoop';
import FunctionMerge from './FunctionMerge';
import LessenPlan from './LessenPlan';
import ReactToPrint from "react-to-print";

const USERS = [
    {
        user_id: 1,
        name: 'Julian'
    },
    {
        user_id: 2,
        name: 'Cedric'
    }
]

const LESSONPLANS = [
    {
        lessonplan_id: 1,
        type: 'Morning'
    },
    {
        lessonplan_id: 2,
        type: 'Evening'
    }
]

class MyLab extends React.Component {
    state = {  
        users: [],
        lessonPlans: []
    }

    handleClickLoadUsers = e => {
        console.log('[ Load Users ]')
        this.setState({ users: USERS })
    }

    handleClickLoadLessonPlans = e => {
        console.log('[ Load Lesson Plans ]')
        this.setState({ lessonPlans: LESSONPLANS })
    }

    handleClickMerge = (a,b) => {
        console.log('[ Merge ]')
    }

    render() { 
        console.log("Current state of 'users': ", this.state.users)
        console.log("Current state of 'lessonPlans': ", this.state.lessonPlans)
        return (  
            <div>
                <br/>
                <p>My Lab</p>
                <br/>
                {/* <Button>Create New Lessen Plan</Button> */}

                {/* <HabitLoop /> */}

                <hr/>
                <br/>

                <Button onClick={this.handleClickLoadUsers}>Load Users</Button>
                <br/>
                <br/>

                <Button onClick={this.handleClickLoadLessonPlans}>Load Lesson Plans</Button>
                <br/>
                <br/>

                <hr/>
                <br/>

                <FunctionMerge users={this.state.users} lessonPlans={this.state.lessonPlans}/>
                <br/>
                <br/>

                <Button onClick={this.handleClickMerge}>Merge</Button>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <ReactToPrint 
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                />
                <LessenPlan ref={(el) => (this.componentRef = el)} />

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        );
    }
}
 
export default MyLab;