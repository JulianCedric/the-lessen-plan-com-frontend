import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Menu inverted>
                    <Menu.Item>
                        <Link to='/badhabit'>Break a Bad Habit</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <h1>or</h1>
                    </Menu.Item>
                    <Menu.Item>
                        <Link>Make a Good Habit</Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
 
export default MainMenu;