import React from 'react';
import Ban from '../../images/tutor-cover.jpg'
const Banner = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 pt-5'>
                    <h2>Online Private Tutor searching</h2>
                    <p>This is my platform of searching online tutor<br/> you can see my profile and contact me.i will teach you bal</p>
                </div>
                <div className='col-md-6'>
                    <img className='img-fluid' src={Ban} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;