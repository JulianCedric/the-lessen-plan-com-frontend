import React from 'react';  
  import './App.css';
  import { Link } from 'react-router-dom';
  import { Form, Grid, Segment } from 'semantic-ui-react';
  
  class SignUp extends React.Component {
      state = {  
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          emailLogin: '',
          passwordLogin: ''
      }
  
      handleChangeLogin = e => {
          this.setState({[e.target.name]: e.target.value})
      }
  
      handleChangeSignUp = e => {
          this.setState({[e.target.name]: e.target.value})
      }

      handleSubmitSignUp = e => {
        this.props.setLogin()
      }
  
    //   handleSubmitSignUp = e => {
    //       e.preventDefault()
    //       fetch('http://localhost:3001/api/v1/users', {
    //           method: 'POST',
    //           headers: {
    //               "Content-Type": "application/json",
    //               Accept: "application/json"
    //           },
    //           body: JSON.stringify({
    //               firstName: this.state.firstName,
    //               lastName: this.state.lastName,
    //               email: this.state.email,
    //               password: this.state.password
    //           })
    //       })
    //       .then(r => r.json())
    //       .then(data => {
    //           if (!data.error) {
    //               this.props.setLogin(data)
    //           }
    //       })
    //   }
  
      render() { 
          return (  
              <div className="login-signup">
                  <div className="twelve wide column">
                      <Grid columns={1} relaxed='very' stackable textAlign='center' style={{ height: '0vh' }} verticalAlign='middle'>
                          <Grid.Column style={{ maxWidth: 450 }}>                     
                            <Form inverted onSubmit={this.handleSubmitSignUp}>       
                                <Segment inverted>
                                    <form action="#">
                                        <h2 style={{ color: 'white' }}>Sign Up</h2>
                                        <hr style={{ width: '250px' }}/>
                                        <br/>
                                        <div class="text-input">
                                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChangeSignUp} id="firstName" placeholder="First Name" style={{width: "250px"}}/>
                                            <span class="separator"> </span><br></br><br></br>                                        
                                        </div>
                                        <div class="text-input">
                                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChangeSignUp} id="lastName" placeholder="Last Name" style={{width: "250px"}}/>
                                            <span class="separator"> </span><br></br><br></br>                                        
                                        </div>
                                        <div class="text-input">
                                            <input type="text" name="email" value={this.state.email} onChange={this.handleChangeSignUp} id="username" placeholder="Email" style={{width: "250px"}}/>
                                            <span class="separator"> </span><br></br><br></br>
                                        </div>   
                                        <div class="text-input">
                                            <input type="password" name="password" value={this.state.password} onChange={this.handleChangeSignUp} id="password" placeholder="Password" style={{width: "250px"}}/>
                                            <span class="separator"> </span><br></br><br></br>
                                        </div>
                                        <div class="form-bottom">
                                            <input type="submit" id="submit" value="Create Account" class="ui violet button" style={{width: "250px"}}/><p></p>
                                        </div>
                                    </form>
                                </Segment>
                            </Form>  
                          </Grid.Column>
                      </Grid>
                  </div> 
              </div>            
          );
      };
  };
   
  export default SignUp;