import React from 'react';
import Step from './Step';
import StepForm from './StepForm';

class Steps extends React.Component {
    render() { 
        console.log("this.props:", this.props);
        return (
            <div className="steps">
                
                {this.props.steps.map(step => <Step key={step.id} {...step} />)}

            </div>
        )
    }
}
 
export default Steps;