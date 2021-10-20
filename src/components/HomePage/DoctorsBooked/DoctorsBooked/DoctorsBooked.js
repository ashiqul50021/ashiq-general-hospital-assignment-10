import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const DoctorsBooked = () => {
    const { doctorsId } = useParams();

    const [doctorsuser, setDoctoruser] = useState([]);
    const [singledoctor, setSingleDoctor] = useState({});

    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctoruser(data))
    }, [])

    useEffect(() => {
        if (doctorsuser.length) {
            const singledoctors = doctorsuser.find(doctor => doctor.id === parseInt(doctorsId))
            setSingleDoctor(singledoctors)
        }
    }, [doctorsId, setSingleDoctor, doctorsuser])









    return (
        <div class="card text-center">
            <div class="card-header">
               <h3>Doctor Details</h3>
            </div>
            <div class="card-body mt-3">
                <img src={singledoctor.img} alt="" />
                <h5 class="card-title mt-5">Doctors Name: {singledoctor.name}</h5>
                <small>{singledoctor.title}</small>
                <p class="card-text">{singledoctor.description}</p>
                <p>Phone: {singledoctor.phone}</p>
                <p>visit fee: {singledoctor.fee}</p>
                <p>Duty: {singledoctor.shift}</p>
                
            </div>
            <div class="card-footer text-muted">
               <button className="btn btn-secondary">Booking Confirm</button>
            </div>
        </div>
    );
};

export default DoctorsBooked;