import React from 'react';
import { Button, Form, Grid, Icon, Image, Reveal } from 'semantic-ui-react';
import HabitLoop from './HabitLoop';
import FunctionMerge from './FunctionMerge';
// import LessenPlan from './LessenPlan';
import ReactToPrint from "react-to-print";
import Create from './Create';
import LessenPlans from './LessenPlans';
import Update from './Update';

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

const LESSENPLANS = [
    {
      id: 0,
      user_id: 0,
      type: 'morning',
      habitDesc: '',
      habitBad: false,
      habitLoopItemA: 'Cue',
      habitLoopItemB: 'Craving',
      habitLoopItemC: 'Response',
      habitLoopItemD: 'Reward',
      habitTracker: 'Under Construction'
    }
  ]

class Lab extends React.Component {
    state = {  
        users: [],
        lessenPlans: [],
        renderCreate: true
    }

    // badHabit = e => {
    //     console.log('Confirmation: badHabit()')
    //     this.setState({ habitBad: true })
    // }

    create = obj => {
        let arr = [...this.state.lessenPlans, obj]
        this.setState({ lessenPlans: arr })
    }

    renderCreate = e => {
        this.setState({ renderCreate: !this.state.renderCreate })
    }

    updateHabitDesc = (id, desc, bad) => {
        let arr = [...this.state.lessenPlans]
        let obj = arr.find(elem => elem.id === id)

        console.log('id: ', id)
        console.log('desc: ', desc)

        obj.habitDesc = desc
        obj.habitBad = bad

        this.setState({ lessenPlans: arr })
    }

    handleClickLoadUsers = e => {
        console.log('[ Load Users ]')
        this.setState({ users: USERS })
    }

    handleClickLoadLessenPlans = e => {
        console.log('[ Load Lessen Plans ]')
        this.setState({ lessenPlans: LESSENPLANS })
    }

    handleClickMerge = (a,b) => {
        console.log('[ Merge ]')
    }

    render() { 
        console.log("Current state of 'lessenPlans': ", this.state.lessenPlans)
        return (  
            <div className="Lab" style={{ color: 'grey' }}>
                <br/>
                <p>Lab</p>

                {/* <hr/> */}
                {/* <br/> */}

                {/* <Button onClick={this.handleClickLoadLessenPlans}>Load Lessen Plans</Button> */}

                <br/>
                <hr/>
                <br/>

                {this.state.renderCreate ? <Create create={this.create} renderCreate={this.renderCreate} /> : null }

                <br/>
                <hr/>
                <br/>

                <Update updateHabitDesc={this.updateHabitDesc} badHabit={this.badHabit} />

                <br/>
                <hr/>
                <br/>



















                {/* <FunctionMerge users={this.state.users} lessenPlans={this.state.lessenPlans}/> */}
                <br/>
                <br/>

                {/* <Button onClick={this.handleClickMerge}>Merge</Button> */}

                <LessenPlans lessenPlans={this.state.lessenPlans} />

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                {/* <LessenPlan ref={(el) => (this.componentRef = el)} />
                
                <span>
                    <Icon color='blue' name='save' size='big'></Icon>
                    <ReactToPrint 
                        trigger={() => <a href="#"><Icon color='blue' name='print' size='big'></Icon></a>}
                        content={() => this.componentRef}
                    />
                </span> */}

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
 
export default Lab;