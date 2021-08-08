import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            
            <img 
                className="header__logo" 
                src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png" 
                alt="Tinder Logo"/>

            <IconButton>
                <ForumIcon className="header__icon" fontSize="large"/>  
            </IconButton>
        </div>
    )
}

export default Header
