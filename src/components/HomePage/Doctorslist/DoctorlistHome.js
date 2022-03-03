import React, { useEffect, useState } from 'react';
import DoctorsDetails from './DoctorsDetails';

const DoctorlistHome = () => {
    const [doctorslisthome, setDoctorlisthome] = useState([]);
    const jsonfile = `./doctors.json`;
    
    useEffect(() => {
        fetch(jsonfile)
        .then(res => res.json())
        .then(data => setDoctorlisthome(data))
    }, [])

    
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="text-center">
                <h3 className="">Our Doctors list</h3>
                <p>best doctor, best places</p>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4 ">
                    {
                        doctorslisthome.slice(0,4).map(doctorslisthome => <DoctorsDetails doctorslist={doctorslisthome}></DoctorsDetails>)
                    }



                </div>
            </div>
        </div>
    );
};


export default DoctorlistHome;