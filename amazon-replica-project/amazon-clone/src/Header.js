import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img 
                className ='header__logo' 
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
            <div className='header__search'>
                <input 
                    className='header__searchInput'
                    type='text'
                />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionaLineOne'> Hello Guest</span>
                    <span className='header__optionaLineTwo'> Sign in</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionaLineOne'> Returns</span>
                    <span className='header__optionaLineTwo'> & Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionaLineOne'> Your</span>
                    <span className='header__optionaLineTwo'> Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionaLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
