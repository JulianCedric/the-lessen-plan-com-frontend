import React from 'react';
import DropdownMenus from './DropdownMenus';

class Dashboard extends React.Component {
    state = {
        selectedTime: 0
    }

    handleStart = userTime => {
        console.log("User clicked the 'Start' button.");
        console.log("userTime:", userTime);
        this.setState({ selectedTime: userTime });
    }

    render() { 
        // const selectedTime = this.state;
        console.log("Current state of 'selectedTime':", this.state.selectedTime);
        return (
            <div>
                <p>Test - Dashboard</p>

                <br/>

                <DropdownMenus handleStart={this.handleStart} />
            </div>
        );
    }
}
 
export default Dashboard;