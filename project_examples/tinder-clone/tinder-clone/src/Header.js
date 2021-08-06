import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <PersonIcon/>
            <h2>Im the header</h2>
            <ForumIcon/>
        </div>
    )
}

export default Header
