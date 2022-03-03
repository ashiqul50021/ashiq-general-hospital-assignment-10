import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Rotate from 'react-reveal/Rotate';
import './DoctorDetails.css';
const DoctorsDetails = (props) => {
    const { user, logout } = useAuth();
    const { id, name, title, img } = props.doctorslist;
    return (
        <Rotate top left>
          <div class="col">
            
            <div class="card h-100  p-1 mb-5 bg-body" style={{borderRadius:'10px', width:''}}>
                <img src={img} class="card-img-top card-images" alt="..." height="250" />
                <div class="card-body text-center">
                    <h5 class="card-title">{name}</h5>
                    <small style={{ color: 'blue', marginBottom: '10px' }}>{title}</small><br />
                   

                    <a class="btn mt-1 mb-0 booked-button" href={`/doctorsBooked/${id}`} role="button">Book {name}</a>
                </div>







            </div>
        </div>
        </Rotate>
        
    );
};

export default DoctorsDetails;