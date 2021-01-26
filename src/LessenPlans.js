import React from 'react';
import LessenPlan from './LessenPlan';
import { Icon, Item } from 'semantic-ui-react';
import ReactToPrint from "react-to-print";

class LessenPlans extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                {this.props.lessenPlans.map(lessenPlan => <LessenPlan key={lessenPlan.id} lessenPlan={lessenPlan} ref={(el) => (this.componentRef = el)} delete={this.props.delete}/>)}
            
            
                <span>
                    <Icon color='blue' name='save' size='big'></Icon>
                    <ReactToPrint 
                        trigger={() => <a href="#"><Icon color='blue' name='print' size='big'></Icon></a>}
                        content={() => this.componentRef}
                    />
                </span>

            </div>
        );
    }
}
 
export default LessenPlans; 