import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Login from './Login';
import Lab from './Lab';
import Lab2 from './Lab2';
import Home from './Home';
import Footer from './Footer';
import SignUp from './SignUp';

class App extends React.Component {
  state = {  
    loggedIn: false,
    firstName: ""
  }

  setLogin = e => {
    console.log('setLogin')
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  render() { 
    return (  
      <Router>
        <React.Fragment>
          <Switch>
            <div className="App" style={{ color: 'white' }}>
              <Sticky context={this.contextRef}>
                <Navbar loggedIn={this.state.loggedIn} setLogin={this.setLogin}/>
              </Sticky>
              <Route path='/' render={(props) => (<Home {...props} />)}></Route>
              <Route path='/lab' render={(props) => (<Lab {...props} />)}></Route>
              <Route path='/login' render={(props) => (<Login {...props} setLogin={this.setLogin}/>)}></Route>
                {!this.state.loggedIn 
                  ? <Redirect to="/" component={ App } /> 
                  : <Redirect to="/lab" component={ Lab } /> 
                }
              <Route path='/signup' render={(props) => (<SignUp {...props} />)}></Route>
            </div>
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
 
export default App;