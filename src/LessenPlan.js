import React from 'react';
import { Button, Card, Container } from 'semantic-ui-react';

class LessenPlan extends React.Component {
    state = {  }
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



                                <p>Card.Description</p>
                            
                            
                            
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