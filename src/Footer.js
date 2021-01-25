import React from 'react';

const Footer = () => {
    return (
        <div className="footer" style={{ color: 'grey' }}>
            <div className="footer-copyright text-center py-3" >
                <h7 className="mediumWhiteText" >meOS Labs © {new Date().toISOString().substring(0, 4)} </h7>
            </div>   
        </div>
    );
};

export default Footer;