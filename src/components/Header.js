import React from 'react';
import PropTypes from 'prop-types'

const Header = ({text}) => {
    const headerStyle={
        backgroundColor:'dodgerblue',
        color:'#fff',
    }
    return (
        
            <header style={headerStyle}>
                <div className="container">
                    <h2>{text}</h2>
                </div>
            </header>
       
    );
};
Header.defaultProps={
    text:'TEST UI',
}
Header.propTypes={
    text: PropTypes.string.isRequired,
}
export default Header;