import React from 'react';
import './../../../style/Features.css'
import tab1 from "../../../images/Features/tab1.png"
import sw from '../../../images/Features/logos-jira software-icon.png'
import conf from '../../../images/Features/logos-confluence.png'
import data from './../FeaturesTab.json'


export default function HeadingPlanAndTrack() {
  var obj;
    for(var i=0; i<data.length; i++)
    {
        obj = data[i];
    }
    
  return (
    <div className='container'>
      <div className='list-row'>
        <div className='head'>
          <h1 style={{ fontSize: '30px' }}>{obj.tabHeading}</h1>
          <p>{obj.tabDescription}</p>
        </div>

        <div className='icon-list'>
          <div className='icon'><img src={conf} alt='tab1' /></div>
          <div className='description'>
   
            <titlee style={{ fontSize: '20px' ,fontWeight:'bold' }}>getget </titlee>
            {/* {data.map((raj) => {raj.list1.map((il) => il.iconHeading)})} */}
            
            <discrp>Stay on track as you plan</discrp>
          </div>
        </div>

         <div className='icon-list'>
          <div className='icon'><img src={sw} alt='tab1' /></div>
          <div className='description'>
            <titlee style={{ fontSize: '20px' ,fontWeight:'bold' }}>Jira Software</titlee>
            <discrp>Project and issue tracking</discrp>
          </div>
        </div>

        <div className='icon-list'>
          <div className='icon'><img src={conf} alt='tab1' /></div>
          <div className='description'>
            <titlee style={{ fontSize: '20px' ,fontWeight:'bold' }}>Confluence</titlee>
            <discrp>Document collaboration</discrp>
          </div>
        </div> 
      </div>
      <div className='img-row'>
        <img src={tab1} alt='tab1' />
      </div>
    </div>
    
  );
}


