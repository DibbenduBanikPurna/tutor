import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            
            <Services/>
            <Footer/>
           
        </div>
    );
};

export default Home;