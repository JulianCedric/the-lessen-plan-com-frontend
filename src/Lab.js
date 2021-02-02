import React from 'react';
import './App.css';
import { Button, Form, Grid, Icon, Image, Reveal } from 'semantic-ui-react';
import HabitLoop from './HabitLoop';
import FunctionMerge from './FunctionMerge';
import LessenPlan from './LessenPlan';
import ReactToPrint from "react-to-print";
import Create from './Create';
import LessenPlans from './LessenPlans';
import Update from './Update';
import LabIcon from './LabIcon';

const USERS = [
    {
        id: 0,
        firstName: 'Adam',
        lastName: 'Benton',
        email: 'adam.boyd@email.com',
        password: 'ab123'
    },
    {
        id: 1,
        firstName: 'Clara',
        lastName: 'Davidson',
        email: 'clara.davidson@email.com',
        password: 'cd123'
    }
]

const LESSENPLANS = [
    {
      id: 0,
      user_id: 0,
      type: 'morning',
      goal: "",
      dueDate: "",
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
        users: USERS,
        lessenPlans: LESSENPLANS,
        renderLabIcon: false,
        renderCreateIcon: true,
        renderCreate: false,
        renderUpdate: true
    }

    handleClickCreate = e => {
        this.setState({ renderLabIcon: !this.state.renderLabIcon })
        this.setState({ renderCreateIcon: !this.state.renderCreateIcon })
        this.setState({ renderCreate: !this.state.renderCreate })
    }

    // badHabit = e => {
    //     console.log('Confirmation: badHabit()')
    //     this.setState({ habitBad: true })
    // }

    create = obj => {
        let arr = [...this.state.lessenPlans, obj]
        this.setState({ lessenPlans: arr })
    }

    signup = (e, obj) => {
        console.log('signup')
    }

    delete = id => {
        console.log('delete', id)
        let arr = [...this.state.lessenPlans]
        let obj = arr.filter(elem => elem.id !== id)
        this.setState({ lessenPlans: arr })
    }

    renderCreate = e => {
        console.log('renderCreate')
        // this.setState({ renderCreate: !this.state.renderCreate })
        // this.setState({ renderUpdate: !this.state.renderUpdate })
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

    updateHabitLoopItemA = (id, cue) => {
        let arr = [...this.state.lessenPlans]
        let obj = arr.find(elem => elem.id === id)
        obj.habitLoopItemA = cue
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
            <div className="lab" style={{ color: 'white' }}>

                {this.state.renderLabIcon ? <LabIcon /> : null }

                {this.state.renderCreateIcon ? <Icon onClick={this.handleClickCreate} inverted color='violet' name='add circle' size='huge'/> : null }
                
                {this.state.renderCreate ? <Create create={this.create} renderCreate={this.renderCreate} signup={this.signup} /> : null }

                {this.state.renderUpdate ? <Update updateHabitDesc={this.updateHabitDesc} updateHabitLoopItemA={this.updateHabitLoopItemA} badHabit={this.badHabit} /> : null }

                <br/>

                <br/>

                {/* <FunctionMerge users={this.state.users} lessenPlans={this.state.lessenPlans}/> */}
                <br/>
                <br/>

                {/* <Button onClick={this.handleClickMerge}>Merge</Button> */}

                <LessenPlans lessenPlans={this.state.lessenPlans} delete={this.delete} />

                {/* <LessenPlan ref={(el) => (this.componentRef = el)} />
                
                <span>
                    <Icon color='blue' name='save' size='big'></Icon>
                    <ReactToPrint 
                        trigger={() => <a href="#"><Icon color='blue' name='print' size='big'></Icon></a>}
                        content={() => this.componentRef}
                    />
                </span> */}

                
            </div>
        );
    }
}
 
export default Lab;