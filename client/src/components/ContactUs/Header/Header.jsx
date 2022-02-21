import React from 'react';
import sideimage from '../../../images/Features/tab4.png'
import Cards from '../ContactCard/cards';
export default function Header() {
  return (
    <div>
    <div className='textcontent'>
      
      <div className='headline'>
        <div className='h1head'>
          <h1>Contact Us About HubSpot's Software</h1>
        </div>
        <div className='ptag'>
          <p>We'd love to show you how you can get more traffic and leads, increase your sales productivity, provide better customer service, or all of the above! Here are a few ways to reach out to our sales team.</p>
        </div>
      </div>

      <div className="sideimage">
        <img src={sideimage} alt='Contactformimage' />
      </div>
    </div>
    <Cards/>
    </div>
  );
}
