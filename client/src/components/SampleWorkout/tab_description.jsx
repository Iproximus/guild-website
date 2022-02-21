import React from 'react'
import data from './features_data.json'
import './../../style/Features.css'


function tab_description() {
    var obj;
    for (var i=0; i<data.length; i++){
        obj=data[i];
    }

    console.log(obj);
    return data.map(s => {
        return (
            <div className='head'>
            <h1 style={{ fontSize: '30px' }}>{s.tabHeading}</h1>
            <p>{s.tabDescription}</p>
            </div>
        );
    })
   
}

export default tab_description

