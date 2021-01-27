import React from 'react';
import LessenPlan from './LessenPlan';
import { Icon, Item } from 'semantic-ui-react';
import Print from './Print';

class LessenPlans extends React.Component {
    state = {  
        renderPrint: false
    }

    render() { 
        return (  
            <div>
                {this.props.lessenPlans.map(lessenPlan => <LessenPlan key={lessenPlan.id} lessenPlan={lessenPlan} ref={(el) => (this.componentRef = el)} delete={this.props.delete}/>)}
            
                {this.state.renderPrint ? <Print /> : null }

            </div>
        );
    }
}
 
export default LessenPlans; 