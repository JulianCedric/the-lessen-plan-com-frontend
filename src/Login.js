import React from 'react';  
import './App.css';
import { Link } from 'react-router-dom';
import { Form, Grid, Segment } from 'semantic-ui-react';
  
class Login extends React.Component {
    state = {  
        email: '',
        password: ''
    }

    handleChangeLogin = e => {
        console.log(e.target.name, e.target.value)       
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitLogin = e => {
        console.log('handleSubmitLogin')
        e.preventDefault()

        fetch('http://localhost:3001/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json' 
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                this.props.setLogin(data)
            }
        }) 
    }
  
    render() { 
        return (  
            <div className="login-signup">
                <div className="twelve wide column">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <Grid columns={1} relaxed='very' stackable textAlign='center' style={{ height: '0vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Form inverted onSubmit={this.handleSubmitLogin}>
                                <Segment inverted className='center-contents'>
                                    <Form.Group>
                                        <form action="#">
                                            <h2 style={{ color: 'white' }}>Login</h2>
                                            <hr style={{ width: '250px' }}/>
                                            <br/>
                                            <div icon='user' iconPosition='left' class="text-input">
                                                <Form.Input icon='user' iconPosition='left' type="text" name="emailLogin" value={this.state.emailLogin} onChange={this.handleChangeLogin} id="username" placeholder="Email" style={{width: "250px"}}/>
                                            </div>
                                            <br/>   
                                            <div class="text-input">
                                                <Form.Input icon='lock' iconPosition='left' type="password" name="passwordLogin" value={this.state.passwordLogin} onChange={this.handleChangeLogin} id="password" placeholder="Password" style={{width: "250px"}}/>
                                                <span class="separator"></span>
                                                <br/>
                                            </div>  
                                            <div class="form-bottom">
                                                <Form.Button type='submit' content="Login" color='violet' style={{width: "250px"}}/><p></p>
                                            </div>
                                        </form>
                                    </Form.Group>
                                </Segment>
                                <Segment inverted style={{ color: 'grey' }}>New to us? <Link to='/signup' className='signup' style={{ color: 'light blue' }}>Sign Up</Link></Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </div> 
            </div>            
        );
    };
  };
   
  export default Login;