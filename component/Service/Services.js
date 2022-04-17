import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const [Data,setData]=useState([])
    useEffect(()=>{
        fetch('tutor.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data.slice(0,3))
        })
    })
    return (
        <div className='container'>
            <div className='row mt-5 pt-5'>
                {
                    Data.map((data)=>{
                        return <Service key={data.id} data={data}/>
                    })
                }
            </div>
           <Link to="/service"> <button className='btn btn-warning'>Show More</button></Link>
            
        </div>
    );
};

export default Services;