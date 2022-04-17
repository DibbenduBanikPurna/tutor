import React, { useEffect, useState } from 'react';
import TutorService from './TutorService';

const TutorServices = () => {
    const [Data,setData]=useState([])
    useEffect(()=>{
        fetch('tutor.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    })
    return (
        <div className='container'>
        <div className='row mt-5 pt-5'>
            {
                Data.map((data)=>{
                    return <TutorService key={data.id} data={data}/>
                })
            }
        </div>
       
        
    </div>
    );
};

export default TutorServices;