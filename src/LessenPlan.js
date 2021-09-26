import React from 'react';
import { Button, Card, Container } from 'semantic-ui-react';

class LessenPlan extends React.Component {
    state = {  }

    handleClickDelete = (e, id) => {
        this.props.delete(id)
    }

    render() { 
        console.log('ID: ', this.props.lessenPlan.id)
        return (  
            <div>
                <Container style={{ width: '700px' }}>
                    <Card fluid color='blue' header='Lessen Plan'>
                        <Card.Content>
                            <Card.Header>Lessen Plan</Card.Header>
                            <Card.Meta>
                                <span>{this.props.lessenPlan.type}</span>
                            </Card.Meta>
                            <Card.Description>




                                <hr/>

                                <p>Step abc. Make a list of your daily morning habits:</p>
                                <p>{this.props.lessenPlan.habitDesc}</p>
                                <br/>
                                <p>Step 2. For each behavior, select "-" if it's bad, or "+" if it's good:</p>
                                <p>*Under Construction*</p>
                                <br/>
                                <p>Step 3. Create a new, personalized plan for eliminating your bad habit:</p>
                                <p>{this.props.lessenPlan.habitLoopItemA}</p>

                                <hr/>
                                <p>10-Day Challenge Habit Tracker</p>
                                <p>*Under Construction*</p>
                                <p>The Problem: </p>
                                <p>The Solution: </p>
                                <p>How It Works: </p>
                                <br/>
                                <Button color='red' onClick={() => this.handleClickDelete(this.props.lessenPlan.id)}>Delete</Button>
                                <br/>
                                <br/>
                                <p>—meOS—</p>

                            
                            
                            
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Container>

                <br/>
                <p>Test - Print</p>
                <br/>

            </div>
        );
    }
}
 
export default LessenPlan;