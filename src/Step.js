import React from 'react';
import { Radio } from 'semantic-ui-react';

class Step extends React.Component {
    render() { 
        console.log("this.props:", this.props.id)
        return (
            <div className="step">
                <li>
                    {this.props.desc}
                </li>
                {/* <Radio label={this.props.s}/> */}
            </div>
        )
    }
}
 
export default Step;