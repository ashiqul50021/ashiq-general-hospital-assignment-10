import React, { useEffect, useState } from 'react';
import DoctorsDetails from './DoctorsDetails';

const Doctorslist = () => {
    const [doctorslist, setDoctorlist] = useState([]);
    const jsonfile = `./doctors.json`;
    
    useEffect(() => {
        fetch(jsonfile)
        .then(res => res.json())
        .then(data => setDoctorlist(data))
    }, [])

    
    return (
        <div>
            <div className="container mb-5">
                <h3 className="text-center mb-5">OUR DOCTORS LIST</h3>
                <div className="row row-cols-1 row-cols-md-4 g-4 ">
                    {
                        doctorslist.map(doctorslist => <DoctorsDetails doctorslist={doctorslist}></DoctorsDetails>)
                    }



                </div>
            </div>
        </div>
    );
};

export default Doctorslist;