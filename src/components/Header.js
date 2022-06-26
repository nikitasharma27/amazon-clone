import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <nav className="header">
        <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"></img>
        </Link>

        <div className="header__search">
            <input type="text" className="header__searchInput"></input>
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionOne">Hello, Nikita</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>
            </Link>
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& Orders</span>
                </div>
            </Link>
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className="header__link">
                <div className="header__optionCart">
                    <ShoppingBasketIcon className="header__cartCount" />
                    <span className="header__optionTwo">0</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header;