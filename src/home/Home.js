import React from 'react';
import Banner from './Banner';
import InfoCards from './InfoCards';
import Services from './Services';
import Appointment from './Appointment/Appointment';
import Testimonials from './testimoials/Testimonials';
import BelowService from './BelowService';


const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <BelowService></BelowService>
           <Appointment></Appointment>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;