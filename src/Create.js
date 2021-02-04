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
            <div className="create">
                <div className="twelve wide column">
                    <Grid columns={1} relaxed='very' stackable style={{ height: '0vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>                     
                        <Form inverted onSubmit={this.handleSubmitHabit}>       
                            <Segment inverted>
                                    <h2 style={{ color: 'white' }}>What habit would you like to 'LESSEN'?</h2>
                                    <Form.Field>
                                        <input placeholder='Example: Eating potato chips for breakfast' />
                                    </Form.Field>
                                    <Button color='violet' style={{ width: '350px' }} type='submit'>Submit</Button>
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