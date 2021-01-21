import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class FunctionMerge extends React.Component {
    state = {  }
    render() { 
        return (
            <div>  
                <span>
                    Merge {' '}
                    
                    <Dropdown
                    inline
                    options={this.props.users}
                    placeholder='user'
                    />

                    and

                    <Dropdown 
                    inline
                    options={this.props.lessonPlans}
                    placeholder='lessonPlan'
                    />

                </span>
            </div>
        );
    }
}

export default FunctionMerge;