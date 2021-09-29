import React from 'react';
import { Button, Card, Grid, Segment } from 'semantic-ui-react';
import Steps from './Steps';

const STEPS = [
    {
        id: 1,
        desc: "a"
    },
    {
        id: 2,
        desc: "b"
    },
    {
        id: 3,
        desc: "c"
    }
];

class MyLessenPlan extends React.Component {
    state = {
        steps: STEPS
    }
    
    render() { 
        console.log("this.state.steps:", this.state.steps);
        return (
            <div className="myLessenPlan">
                <Grid container columns={3} doubling stackable style={{ color: 'black' }}>
                    <Grid.Column>
                        <Segment>
                            <Card.Group>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>{this.props.title}</Card.Header>
                                        <Card.Meta>{this.props.duration} minutes</Card.Meta>
                                        <hr/>
                                        <Card.Description>
                                            <div className="steps">
                                                <h4>Steps</h4>
                                                <Steps steps={this.state.steps} />
                                                <br/>
                                                <Button basic color="cornflower blue">Add Step</Button>
                                            </div>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className="start">
                                            <Button color="cornflower blue" fluid>
                                                Start
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
 
export default MyLessenPlan;