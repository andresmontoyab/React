import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import './Header.css'

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__arrowback"/>
                </IconButton>
            ): (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}
             
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png" 
                    alt="Tinder Logo"/>
            </Link>
            

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>  
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header
