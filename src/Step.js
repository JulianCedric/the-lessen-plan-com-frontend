import React from 'react';
import { Radio } from 'semantic-ui-react';

class Step extends React.Component {
    render() { 
        console.log("this.props:", this.props.id)
        return (
            <div className="step">
                <Radio label={this.props.desc} />
                <br/>

            </div>
        )
    }
}
 
export default Step;