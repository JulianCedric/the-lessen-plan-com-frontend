import React from 'react';
import { Icon } from 'semantic-ui-react';
import ReactToPrint from "react-to-print";

const Print = () => {
    return(
        <span>
        <Icon color='blue' name='save' size='big'></Icon>
        <ReactToPrint 
            trigger={() => <a href="#"><Icon color='blue' name='print' size='big'></Icon></a>}
            content={() => this.componentRef}
        />
    </span>
    )
}

export default Print;