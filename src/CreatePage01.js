import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Menus from './Menus';
import BadHabit from './BadHabit';
import GoodHabit from './GoodHabit';

class CreatePage01 extends React.Component {
    state = {  
        renderCreatePage02: false
    }

    handleClickBad = e => {
        this.setState({ renderCreatePage02: !this.state.renderCreatePage02 })
    }

    handleClickOr = e => {
        console.log('Easter Egg 1..')
    }

    render() { 
        return ( 
            <Router>
                <React.Fragment>
                    <Switch>
                        <div>
                            <h1>What are we creating a Lessen Plan for today?</h1>
                            <br/>
                            <Menus />
                            <span><Button onClick={this.handleClickBad} color='red' size='huge'>Break a Bad Habit</Button><Button color='black' size='huge' onClick={this.handleClickOr}>or</Button><Button color='green' size='huge'>Make a Good Habit</Button></span>
                            <Route exact path='/badhabit' render={(props) => (<BadHabit {...props} />)}></Route>
                            <Route exact path='/goodhabit' render={(props) => (<GoodHabit {...props} />)}></Route>
                        
                        
                        
                        </div>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}
 
export default CreatePage01;