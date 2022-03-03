import React from 'react';
import Banner from '../Banner/Banner';
import Contactus from '../Contactus/Contactus';
import DoctorlistHome from '../Doctorslist/DoctorlistHome';
import Ourservice from '../OurService/Ourservice';
import SpecialDoctor from '../SpecialDoctor/SpecialDoctor';
// import bodyimg from '../../../images/bodybag.jpg';
import Partner from '../Partner/Partner';
import Emergency from '../Emergency/Emergency';
import { Zoom } from 'react-reveal';
import Testimonial from '../Testimonial/Testimonial';

// import Navbar from '../Navbar/Navbar';

const Home = () => {
    const bodyStyle = {
        // backgroundImage: `url(${bodyimg})`,
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
            <Zoom>
            <Emergency />
            </Zoom>
            <DoctorlistHome></DoctorlistHome>
            <Zoom>
                <SpecialDoctor></SpecialDoctor>
            </Zoom>

            <Partner />
            <Testimonial/>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;