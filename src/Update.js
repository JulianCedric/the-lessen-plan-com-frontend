import React from 'react';

class Update extends React.Component {
    state = {  
        id: null,
        user_id: null,
        type: "",
        habitDesc: "",
        habitBad: false,
        habitLoopItemA: "",
        habitLoopItemB: "",
        habitLoopItemC: "",
        habitLoopItemD: "",
        habitTracker: ""
    }

    

    render() { 
        return (  
            <div>
                <p>Step 1. Make a list of your daily morning habits:</p>
                <p></p>
            </div>
        );
    }
}
 
export default Update;