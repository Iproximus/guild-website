import Logo from './../../images/Header/logo.svg'
import './../../style/navbar.css';
import React, { useEffect } from 'react';

import Products from './Products';
import Enterprise from './Enterprise';
import Resources from './Recources';
import Pricing from './Pricing';
import Search from './Search';
import Signin from './Signin';
import TalkToSales from './TalkToSales';
import TryForFree from './TryForFree'

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if (scrolled) {
        x.push('scrolled');
    }

    return (        
        < header className={x.join(" ")} >
            <nav className="navigation nav-left">
                <ul>
                    <li>  <div className="logo"><img src={Logo} alt="Logo" title="Logo" /></div></li>
                    <li><a className='a' href="#post1"><Products /></a></li>
                    {/* <li><HashLink className='hover-underline-animation a' to="/Testimonials#testimonials"><Solutions /></HashLink></li> */}
                    <li><a className='hover-underline-animation a' href="#post3"><Enterprise /></a></li>
                    <li><a className='hover-underline-animation a' href="#post4"><Resources /></a></li>
                    <li><a className='hover-underline-animation a' href="#post4"><Pricing /></a></li>
                </ul>
            </nav>

            <nav className="navigation nav-right">
                <ul>
                    <li><a className='a' href="#post4"><Search /></a></li>
                    <li><a className='hover-underline-animation a' href="#post4"><Signin /></a></li>
                    <li><a className='a' href="#post4"><TalkToSales /></a></li>
                    <li><a className='a' href="#post4"><TryForFree /></a></li>
                </ul>
            </nav>
        </header >
    );
};

export default Navbar;