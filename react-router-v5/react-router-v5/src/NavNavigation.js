import React from 'react'
import {NavLink} from 'react-router-dom'

const NavActive = {
    color: 'red'
}

const NavSimpleNavegation = () => (
    <nav>
        <NavLink exact activeStyle={NavActive} to="/"> Nav Home</NavLink>
        <NavLink activeStyle={NavActive} to="/another"> Nav Home Hola</NavLink>
        <NavLink activeStyle={NavActive} to="/products"> Nav Products</NavLink>
    </nav>
)

const NavNavigation = () => {
    return (
        <div>
            <NavSimpleNavegation></NavSimpleNavegation>
        </div>
    )
}

export default NavNavigation
