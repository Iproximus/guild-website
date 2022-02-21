import React from 'react';
import MeetFrom from './meet_form';

import '../../../style/ContactUs.css'

export default function FromHeader() {
    return (
        <div >
            <div className='bookameeting'>
                <h1>Book a Meeting</h1>
            </div>
            <div className="formdetails">
                <p> To schedule time to speak with one of our sales representatives, complete the form, then click "next" to choose a date and time that works for you.</p>
            </div>
            <MeetFrom/>
        </div>
    );
}
