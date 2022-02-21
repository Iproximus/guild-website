import React from 'react';
import './../../style/ContactUs.css'
import Header from './Header/Header';
import From from './Form/form';

export default function ContactUs() {
    return (
        <div className='contactContainer'>
            <div className='header'>
                <Header />
            </div>
            <div className='contactform'>
                <From />
            </div>
        </div>
    );
}
