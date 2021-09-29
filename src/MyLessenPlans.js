import React from 'react';
import { Card, Grid, Header, Segment } from 'semantic-ui-react';

class MyLessenPlans extends React.Component {
    render() { 
        return (
        
            <div>
                {/* <Header as='h3' content='Doubling Grid Container' style={style.h3} textAlign='center' /> */}

                <Header
                as='h3'
                content='My Lessen Plans'
                // style={{ color: 'black' }}
                textAlign='center'
                />
                <Grid container columns={3} doubling stackable style={{ color: 'black' }}>
                <Grid.Column>
                    <Segment>Time-Blocked DWS</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Routine 2</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Routine 3</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Routine 4</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Routine 5</Segment>
                </Grid.Column>
                </Grid>
            </div>
        );
    }
}
 
export default MyLessenPlans;

//

// import React from 'react';
// import './App.css';
// import { Form } from 'semantic-ui-react';

// class QuestionForm extends React.Component {
//     state = {  
//         question: ""
//     }

//     handleChange = e => {
//         console.log("User is typing.. ")
//         this.setState({[e.target.name]: e.target.value})
//     }

//     handleSubmit = e => {
//         console.log("User submitted a question.")
//         console.log("Current state of question:", this.state.question);
    
//         const newQuestion = this.state.question;
//         console.log(newQuestion);
//         this.props.handleUserSubmit(newQuestion);
//         this.setState({ question: "" });
//     }

//     render() { 
//         return (  
//             <div className="question-form">
//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Group>
//                         <Form.Input 
//                             placeholder='Your 1Question.. '
//                             name='question'
//                             value={this.state.question}
//                             onChange={this.handleChange}
//                         />
//                         <Form.Button content="Submit"/>
//                     </Form.Group>
//                 </Form>
//             </div>
//         );
//     }
// }
 
// export default QuestionForm;

// // test