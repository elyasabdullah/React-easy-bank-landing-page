import React from 'react'
import Logo from '../../assets/Images/logo.svg'
import OpenIcon from '../../assets/Images/Icons/icon-hamburger.svg';
import CloseIcon from '../../assets/Images/Icons/icon-close.svg';

export default function Header() {

    function OpenMenu() {
        document.querySelector('.header .content .icon-close').classList.add('active');
        document.querySelector('.header .content .icon-open').classList.remove('active');
        document.querySelector('header .content nav ul').classList.add('mobile-active')
        document.querySelector('header .content nav').classList.add('mobile-active')
    }
    function CloseMenu() {
        document.querySelector('.header .content .icon-open').classList.add('active');
        document.querySelector('.header .content .icon-close').classList.remove('active');
        document.querySelector('header .content nav ul').classList.remove('mobile-active');
        document.querySelector('header .content nav').classList.remove('mobile-active');
    }
    return (
        <header className="header">
            <div className="container">
                <div className="content">
                    <img className='logo' src={Logo}/>
                    <div onClick={OpenMenu} className="icon icon-open active">
                        <img src={OpenIcon} alt="Open Icon"/>
                    </div>
                    <div onClick={CloseMenu} className="icon icon-close">
                        <img src={CloseIcon} alt="Close Icon"/>
                    </div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </nav>
                    <button className="requestInvite">Request Invite</button>
                </div>
            </div>
        </header>
    )
}