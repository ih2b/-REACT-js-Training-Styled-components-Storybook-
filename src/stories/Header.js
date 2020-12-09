import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import {Button,SalesButton} from '../Components/Button';
function Header({title, darkMode}) {

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://img.phonandroid.com/2017/08/youtube-nouveau-logo.jpg" alt="toto"/>
            </div>
            {
                title && <h3>{title}</h3>
            }
            <div className="header__right">
                <Button darkMode={darkMode} >Login</Button>
                <Button>Register</Button>
                <SalesButton>Buy Now</SalesButton>
            </div>
            <div className="header__right--mobile">
                <MenuIcon />
            </div>
        </div>
    )
}

export default Header
