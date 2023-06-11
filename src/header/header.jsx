import React, { useState } from 'react';
import '../header/header.scss'

const Header = () => {

    const [open, setOpen] = useState(false)


    return (
        <header className='header'>
            <div className="header__container">
                <div className="logo">
                    <img src="../public/favicon.png" alt="" className="logo__img" />
                    <h1 className="logo__text">maxForecast</h1>
                </div>
                <nav className={open? 'nav active' : 'nav'}>
                    <ul className="menu__list">
                        <li><a href="" className="menu__item">about</a></li>
                        <li><a href="" className="menu__item">history</a></li>
                        <li><a href="" className="menu__item">statistick</a></li>
                    </ul>
                </nav>
                <div className="right__nav">
                    <button className="settings__btn">settings</button> 
                    <div className={open? 'burger active' : 'burger'} onClick={open? ()=> setOpen(false) : ()=> setOpen(true)}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;