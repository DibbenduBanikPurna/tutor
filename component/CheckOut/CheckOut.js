import React from 'react';
import P from '../../images/purna.jpg'
const CheckOut = () => {
    const handleSUbmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
                <img className='img-fluid' src={P} alt=""/>
                <p>Your Private Tutor</p>

            </div>
            <div className='col-md-6'>
                <form onSubmit={handleSUbmit}>
                    <input type="text" placeholder="Enter Name"/>
                    <br/>
                    <input type="email" placeholder="Enter Email"/>
                    <br/>
                    <textarea  placeholder="Enter Address"/>
                    <br/><input type="text" placeholder="Enter Your class"/>
                    <br/>
                    <input type="text" placeholder="which month you want to start?"/>
                    <br/>
                    <input type="submit" value="Here you chosse"/>
                    <br/>

                </form>
            </div>

            </div>
            
            
        </div>
    );
};

export default CheckOut;