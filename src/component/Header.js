import React from 'react';

const Header = (props)=>(
            <div className = "header">
            <div className="container">
                <h1 className="header__title">{props.doctTitle}</h1>
                <h2 className="header__subtitle">{props.docSubTitle}</h2>
            </div>
            </div>
);
Header.defaultProps = {
    doctTitle: 'Indecidion App',
    docSubTitle: 'Put your life in the hands of a Computer'
}

export default Header;