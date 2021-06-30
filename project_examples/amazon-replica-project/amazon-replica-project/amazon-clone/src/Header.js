import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue()
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }
    console.log(user)
    console.log("In the header >>>", basket)

    return (
        <div className='header'>
            <Link to="/">
                <img 
                    className ='header__logo' 
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                />
            </Link>
            <div className='header__search'>
                <input 
                    className='header__searchInput'
                    type='text'
                />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className='header__nav'>
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionaLineOne'> Hello { user ? user.email : 'Guest'}</span>
                        <span className='header__optionaLineTwo'> { user ? 
                            'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                
                <Link to={"/orders"}>
                    <div className='header__option'>
                        <span className='header__optionaLineOne'> Returns</span>
                        <span className='header__optionaLineTwo'> & Orders</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionaLineOne'> Your</span>
                    <span className='header__optionaLineTwo'> Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span 
                            className="header__optionaLineTwo 
                                       header__basketCount">
                            {basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
