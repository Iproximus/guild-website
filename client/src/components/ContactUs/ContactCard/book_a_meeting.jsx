import React from 'react';
import '../../../style/ContactUs.css'
import Bookdate from '../../../images/ContactUs/Date.webp'


export default function BookaMeeting() {
    return (

        <div className='cardsContainer'>
            <div className="divcard">
                <div className="cardicon">
                    <img src={Bookdate} alt='Book a meet' />
                </div>
                <div className="cardname">
                    <h1 className='h1head'>Book a meeting</h1>
                </div>
                <div className="cardbutton">
                    <button className='btnstyle'>Choose a date & time</button>
                </div>
            </div>
        </div>


    );
}
