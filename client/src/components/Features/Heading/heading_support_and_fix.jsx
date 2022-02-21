import React from 'react';
import './../../../style/Features.css'
import tab2 from "../../../images/Features/tab2.png"
import icon1 from '../../../images/Features/jira service manage.webp'
import icon2 from '../../../images/Features/opsgenie.webp'
import icon3 from '../../../images/Features/statuspage.webp'

export default function HeadingSupportAndFix() {
  return(
    <div className='container'>
    <div className='list-row'>
      <div className='head'>
        <h1 style={{ fontSize: '30px' }}>Resolve incidents faster</h1>
        <p>Unite development, operations, & support to keep downtime to a minimum.</p>
      </div>
      <div className='icon-list'>
        <div className='icon'><img src={icon1} alt='tab1' /></div>
        <div className='description'>
          <titlee style={{ fontSize: '20px' ,fontWeight:'bold' }}>Jira Service Management</titlee>
          <discrp>Stay on track as you plan</discrp>
        </div>
      </div>

      <div className='icon-list'>
        <div className='icon'><img src={icon2} alt='tab1' /></div>
        <div className='description'>
          <titlee style={{ fontSize: '20px' ,fontWeight:'bold' }}>Opsgenie</titlee>
          <discrp>High-velocity ITSM</discrp>
        </div>
      </div>

      <div className='icon-list'>
        <div className='icon'><img src={icon3} alt='tab1' /></div>
        <div className='description'>
          <titlee style={{ fontSize: '20px' ,fontWeight:'bold' }}>Statuspage</titlee>
          <discrp>Incident communication</discrp>
        </div>
      </div>
    </div>
    <div className='img-row'>
      <img src={tab2} alt='tab2' />
    </div>
  </div>
  );
}
