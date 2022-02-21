import React from 'react';
import '../../style/workout.css'
import value from './our_team_profile.json'
import image from './../../images/OutTeam/Ourteam-icon3.webp'


export default function Workoout() {
    return (
        <div>
            <div className='conatainr'>
                {value && value.map((d) => {
                    return (
                        <div key={d.id}>
                            <div className="card">
                                <div className='img__wrap'>
                                    <img src={image} alt='icon' className='img__img' style={{ width: '100%', height: '100%' }}></img>
                                    <div class="img__description">
                                        <h4 className='desgination'>{d.desgination}</h4>
                                        <h4 className='profilename'>{d.name}</h4>
                                        <p className='profilename'> {d.description} </p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='desgination'>{d.desgination}</h4>
                                </div>
                                <div>
                                    <h4 className='profilename'>{d.name}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
