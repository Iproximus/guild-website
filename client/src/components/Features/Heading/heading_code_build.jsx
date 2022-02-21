import React from 'react';
import './../../../style/Features.css'
import tab3 from "../../../images/Features/tab3.png"
// import allgn from '../../../images/Features/Jira Align-icon.png'
import sw from '../../../images/Features/logos-jira software-icon.png'
import conf from '../../../images/Features/logos-confluence.png'

export default function HeadingCodeBuild() {
    return (
        <div className='container'>
          <div className='list-row'>
            <div className='head'>
              <h1 style={{ fontSize: '30px' }}>Build at the speed of innovation</h1>
              <p>Plan software projects, collaborate on code, test and deploy products.</p>
            </div>
    
            <div className='icon-list'>
              <div className='icon'><img src={conf} alt='tab1' /></div>
              <div className='description'>
       
                <titlee style={{ fontSize: '20px' ,fontWeight:'bold' }}>Jira Allgn</titlee>
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
            <img src={tab3} alt='tab3' style={{height:'500px'}} />
          </div>
        </div>
      );
    
}
