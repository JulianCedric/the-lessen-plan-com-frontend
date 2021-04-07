import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
    render() { 
        return (  
            <div className="Navbar">
                <Menu borderless inverted size="large">
                    <Menu.Item>
                        <Link to="/" className="link"><Icon name='home' size='big'></Icon></Link>
                    </Menu.Item>
                    
                    {/* <Menu.Item>
                        <Link to='/lab' className='lab'><Icon name='lab' size='big'></Icon></Link>
                    </Menu.Item> */}

                    <Menu.Item>
                        <Link to='/lab2' className='lab'><Icon name='lab' size='big'></Icon></Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to='About' className='about'>About</Link>
                    </Menu.Item>

                    <div className="right menu">
                        <a className="item">
                            {
                                this.props.loggedIn
                                ? <Link to="/login" onClick={this.props.setLogin} className="link">Logout</Link>
                                : <Link to="/login" className="link">Login | Sign Up</Link>
                            }
                        </a>
                    </div>
                </Menu>
            </div>
        );
    };
};

export default Navbar;