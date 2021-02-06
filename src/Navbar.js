import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class Navbar extends React.Component {
    render() { 
        return (  
            <div className="Navbar">
                <div className="ui inverted borderless large menu">
                    <a className="item">
                        <Link to="/" className="link"><Icon name='home' size='big'></Icon></Link>
                    </a>
                    
                    <a class='item'>
                        <Link to='/lab' className='lab'><Icon name='lab' size='big'></Icon></Link>
                    </a>

                    <a class='item'>
                        <Link to='/lab2' className='lab'><Icon name='lab' size='big'></Icon></Link>
                    </a>

                    <div className="right menu">
                        <a className="item">
                            {
                                this.props.loggedIn
                                ? <Link to="/login" onClick={this.props.setLogin} className="link">Logout</Link>
                                : <Link to="/login" className="link">Login | Sign Up</Link>
                            }
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Navbar;