import React from 'react';
import { Link } from 'react-router-dom';

const TutorService = ({data}) => {

    const  {classs,sub,din,salary,id}=data;
    
    return (
        <div className='col-md-4'>
            <div className='card'>
                <p>class:{classs}</p>
                <h2>weekly:{din} days</h2>
                <p>sub i teach:{sub[0]} {sub[1]}{sub[2]}</p>
                <h5>monthly salary:{salary}</h5>
               <Link to={`/service/${id}`}><button className='btn btn-primary'>Add Me As your Tutor</button></Link> 
            </div>
            
        </div>
    );
};

export default TutorService;