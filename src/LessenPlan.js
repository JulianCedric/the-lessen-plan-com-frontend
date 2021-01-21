import React from 'react';
import { Button } from 'semantic-ui-react';

class LessenPlan extends React.Component {
    state = {  }
    render() { 
        console.log('ID: ', this.props.lessenPlan.id)
        return (  
            <div>

                <br/>
                <br/>
                <br/>

                <br/>
                <p>Test - Print</p>
                <br/>
            </div>
        );
    }
}
 
export default LessenPlan;