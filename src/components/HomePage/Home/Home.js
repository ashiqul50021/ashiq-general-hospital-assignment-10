import React from 'react';
import Banner from '../Banner/Banner';
import Contactus from '../Contactus/Contactus';
import DoctorlistHome from '../Doctorslist/DoctorlistHome';
import Ourservice from '../OurService/Ourservice';

// import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Ourservice></Ourservice>
            <DoctorlistHome></DoctorlistHome>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;