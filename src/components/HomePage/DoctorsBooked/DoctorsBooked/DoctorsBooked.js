import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import DoctorsDetails from '../../Doctorslist/DoctorsDetails';

const DoctorsBooked = () => {
    const {doctorsId } = useParams();
    // const [doctorsDetails, setDoctorDetails] = useState([]);
    // console.log(doctorsId);

    const url = `../../../../../public/doctors.json`;
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    // const search = doctorsDetails.find(details => details.id === doctorsId)
    // console.log(search)
    // console.log(props)
    

  


 




    return (
        <div>
            <h2>This is booking: {doctorsId} </h2>
         
            
           
        </div>
    );
};

export default DoctorsBooked;