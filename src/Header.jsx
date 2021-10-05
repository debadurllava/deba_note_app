 import React from 'react';
 import logo from './Images/logo.png';

 const Header = () =>{
    return(
        <>
        <div className="header">
            <img height='60px' src={logo} alt="logo"/>
            <h1>Deba Note</h1>
        </div>
        </>
    )
 };

 export default Header;