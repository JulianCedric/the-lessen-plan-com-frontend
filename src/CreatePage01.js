import React from 'react';
// import { Button, Menu } from 'semantic-ui-react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Menus from './Menus';
import BadHabit from './BadHabit';
import GoodHabit from './GoodHabit';

class CreatePage01 extends React.Component {
    state = {  
        // renderCreatePage02: false
        goal: ""
    }

    handleChangeGoal = e => {
        
    }

    // handleClickBad = e => {
    //     this.setState({ renderCreatePage02: !this.state.renderCreatePage02 })
    // }

    // handleClickOr = e => {
    //     console.log('Easter Egg 1..')
    // }

    render() { 
        return ( 
            <div className="create-page-01">
                <div className="twelve wide column">
                    <Grid columns={1} relaxed='very' stackable textAlign='center' style={{ height: '0vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Form inverted onSubmit={this.handleSubmitSignUp}>
                                <Segment inverted>
                                    <form action="#">
                                        <h2 style={{ color: 'white' }}>What is your goal?</h2>
                                        <hr style={{ width: '250px' }}/>
                                        <br/>
                                        <div class="text-input">
                                            <Form.Input type='text' name='goal' value={this.state.goal} onChange={this.handleChangeGoal} placeholder='Your Goal.. ' style={{ width: '250px' }} />
                                            <span class="separator"></span>                                     
                                        </div>
                                        <div class="form-bottom">
                                            <input type="submit" id="submit" value="Submit" class="ui violet button" style={{width: "250px"}}/><p></p>
                                        </div>
                                    </form>
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}
 
export default CreatePage01;

{/* <Router>
<React.Fragment>
    <Switch>
        <div>
            <h1>What is your goal?</h1>
            <br/>
            
            <Menus />
            <span><Button onClick={this.handleClickBad} color='red' size='huge'>Break a Bad Habit</Button><Button color='black' size='huge' onClick={this.handleClickOr}>or</Button><Button color='green' size='huge'>Make a Good Habit</Button></span>
            <Route exact path='/badhabit' render={(props) => (<BadHabit {...props} />)}></Route>
            <Route exact path='/goodhabit' render={(props) => (<GoodHabit {...props} />)}></Route>
        
        
        
        </div>
    </Switch>
</React.Fragment>
</Router> */}