import React from 'react';

const Button = ({type,isDisabled,children,version}) => {
    return (
        <button type={type} disabled={isDisabled} className={`btn ${version}` } >
            {children}
        </button>
    );
};
Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:false,

}

export default Button;