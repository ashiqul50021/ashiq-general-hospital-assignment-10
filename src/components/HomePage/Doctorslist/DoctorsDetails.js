import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DoctorsDetails = (props) => {
    const { user, logout } = useAuth();
    const { id, name, title, img } = props.doctorslist;
    return (
        <div class="col">
            <div class="card h-100  p-1 mb-5 bg-body rounded border-0">
                <img src={img} class="card-img-top" alt="..." height="250" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <small style={{ color: 'blue', marginBottom: '10px' }}>{title}</small><br />
                   

                    <a class="btn mt-1 btn-dark" href={`/doctorsBooked/${id}`} role="button">Book {name}</a>
                </div>







            </div>
        </div>
    );
};

export default DoctorsDetails;