import React from 'react';
import { Button, Form, Grid, Icon, Segment } from 'semantic-ui-react';

class Create extends React.Component {
    state = {  
        id: 1,
        user_id: 1,
        type: "",
        goal: "",
        dueDate: "",
        habitDesc: "",
        habitBad: false,
        habitLoopItemA: "",
        habitLoopItemB: "",
        habitLoopItemC: "",
        habitLoopItemD: "",
        habitTracker: ""
    }

    handleChangeCreate = e => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitCreate = e => {
        e.preventDefault()
        let obj = this.state
        this.props.create(obj)
        this.props.renderCreate()
    }

    render() { 
        return (  

            // <div>
            //     <br/>
            //     <h2>Create a New Lessen Plan</h2> 
            //     <br/>
            //     <div className="create">
            //         <Form onSubmit={this.handleSubmit}>
            //             <Form.Group>
            //                 <Form.Input 
            //                     placeholder="e.g. Morning Routine"
            //                     name="type"
            //                     value={this.state.type}
            //                     onChange={this.handleChange}
            //                     style={{ width: '250px' }}
            //                 />
            //             </Form.Group>
            //             <Form.Button inverted color='orange' content='Create' style={{ width: '250px' }}/>
            //         </Form>
            //     </div>
                <div className="login-signup">
                <div className="twelve wide column">
                    <Grid columns={1} relaxed='very' stackable textAlign='center' style={{ height: '0vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>                     
                        <Form inverted onSubmit={this.handleSubmitSignUp}>       
                            <Segment inverted>
                                <form action="#">
                                    <h2 style={{ color: 'white' }}>My New Lessen Plan</h2>
                                    <hr style={{ width: '250px' }}/>
                                    <br/>
                                    <div class="text-input">
                                        <input type="text" name="goal" value={this.state.goal} onChange={this.handleChangeCreate} id="goal" placeholder="Goal" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>                                        
                                    </div>
                                    <div class="text-input">
                                        <input type="text" name="dueDate" value={this.state.dueDate} onChange={this.handleChangeCreate} id="dueDate" placeholder="Due Date" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>                                        
                                    </div>
                                    {/* <div class="text-input">
                                        <input type="text" name="email" value={this.state.email} onChange={this.handleChangeSignUp} id="username" placeholder="Email" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>
                                    </div>   
                                    <div class="text-input">
                                        <input type="password" name="password" value={this.state.password} onChange={this.handleChangeSignUp} id="password" placeholder="Password" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>
                                    </div> */}
                                    <div class="form-bottom">
                                        <input type="submit" id="submit" value="Create" class="ui violet button" style={{width: "250px"}}/><p></p>
                                    </div>
                                </form>
                                <br/>
                            </Segment>
                        </Form>  
                        </Grid.Column>
                    </Grid>
                </div> 
            </div>
            // </div>
        );
    }
}
 
export default Create;