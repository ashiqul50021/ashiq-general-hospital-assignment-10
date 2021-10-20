import React from 'react';
import Banner from '../Banner/Banner';
import Contactus from '../Contactus/Contactus';
import DoctorlistHome from '../Doctorslist/DoctorlistHome';
import Ourservice from '../OurService/Ourservice';
import SpecialDoctor from '../SpecialDoctor/SpecialDoctor';
import bodyimg from '../../../images/bodybag.jpg';

// import Navbar from '../Navbar/Navbar';

const Home = () => {
    const bodyStyle = {
        backgroundImage: `url(${bodyimg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',

    }
    return (
        <div style={bodyStyle}>
            <Banner></Banner>
            <Ourservice></Ourservice>
            <DoctorlistHome></DoctorlistHome>
            <SpecialDoctor></SpecialDoctor>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;