import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__icon" 
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
                alt="" 
            />
            </Link>

            <div className="header__center">
                <input type="text" placeholder="Search..." />
                <SearchIcon/>

            </div>

            <div className="header__right">
                <h4>Become a Host</h4>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
            
        </div>
    )
}

export default Header
