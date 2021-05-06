import React from 'react'
import {Link} from 'react-router-dom'

const SimpleNavegation = () => (
    <nav>
        <Link to="/"> Nav Home</Link>
        <Link to="/another"> Nav Home Hola</Link>
        <Link to="/products"> Nav Products</Link>
        <Link to={
            {
                pathname: '/products',
                search: '?order=name',
                state: {
                    'name': 'Andres',
                    'age': 25
                }
            }
        }> Complex Search</Link>
    </nav>
)

const Navigation = () => {
    return (
        <div>
            <SimpleNavegation></SimpleNavegation>
        </div>
    )
}

export default Navigation
