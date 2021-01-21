import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Login from './Login';
import Lab from './Lab';

class App extends React.Component {
  state = {  }
  render() { 
    return (  
      <Router>
        <React.Fragment>
          <Switch>
            <div className="App" style={{ color: 'grey' }}>
              <Sticky context={this.contextRef}>
                <Navbar />
              </Sticky>
              <Route path='/lab' render={(props) => (<Lab {...props} />)}></Route>
              <Route path='/login' render={(props) => (<Login {...props} />)}></Route>
            </div>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
 
export default App;