import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Lab from './Lab';
import Footer from './Footer';
import SignUp from './SignUp';

class App extends React.Component {
  state = {  
    loggedIn: false,
    redirect: false,
    users: []
  }

  handleClick = e => {
    this.setState({ redirect: !this.state.redirect })
  }

  setLogin = e => {
    console.log('setLogin')
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  signup = obj => {
    console.log('signup')
    console.log(obj)
  }

  render() { 
    return (  
      <Router>
        <React.Fragment>
          <Switch>
            <div className="App" style={{ color: 'white' }} onClick={this.handleClick}>
              <Sticky context={this.contextRef}>
                <Navbar loggedIn={this.state.loggedIn} setLogin={this.setLogin}/>
              </Sticky>
              <Route exact path='/' render={(props) => (<Home {...props} />)}></Route>
              <Route exact path='/lab' render={(props) => (<Lab {...props} />)}></Route>
              <Route exact path='/login' render={(props) => (<Login {...props} setLogin={this.setLogin}/>)}></Route>
                {this.state.loggedIn 
                  ? <Redirect to="/lab" component={ Lab } /> 
                  : <Redirect to="/Lab" component={ Lab } /> 
                }
              <Route exact path='/signup' render={(props) => (<SignUp {...props} signup={this.signup}/>)}></Route>
            </div>
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
 
export default App;