import React from 'react';
import { Button, Card, Grid, Segment } from 'semantic-ui-react';

class MyLessenPlan extends React.Component {
    render() { 
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
                                                <p>1. {this.props.steps}</p>
                                            </div>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className="start">
                                            <Button basic color="cornflower blue">
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