import React from 'react';
import Me from '../../images/purna.jpg'
const About = () => {
    return (
        <div className='container'>
            <div className='row mt-5 pt-5'>
                <div className='col-md-5'>
                    <img className='img-fluid' src={Me} alt=""/>

                </div>
                <div className='col-md-5'>
                    <h2>My Educational Background</h2>
                    <ul>
                        <li>S.s.c:2015</li>
                        <li>School:Mukul Niketon High School,Mymensingh</li>
                        <li>College:Notre Dame College,Mymensingh</li>
                        <li>Versity:MBSTU</li>
                        <li>current:3rd year student</li>
                    </ul>

                </div>
            </div>
          
        </div>
    );
};

export default About;