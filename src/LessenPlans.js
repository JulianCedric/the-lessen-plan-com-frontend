import React from 'react';
import LessenPlan from './LessenPlan';

class LessenPlans extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                {this.props.lessenPlans.map(lessenPlan => <LessenPlan key={lessenPlan.id} lessenPlan={lessenPlan} />)}
            </div>
        );
    }
}
 
export default LessenPlans;