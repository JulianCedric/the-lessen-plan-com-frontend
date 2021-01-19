import React from 'react';
import CreateForm from './CreateForm';

class Dashboard extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <p>Step 1. Make a list of your daily habits.</p> 
                <CreateForm />        
                <p>Step 2.</p>
            </div>
        );
    }
}
 
export default Dashboard;