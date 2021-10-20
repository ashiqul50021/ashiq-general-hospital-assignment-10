import { faSimplybuilt } from '@fortawesome/free-brands-svg-icons';
import { faPenSquare, faPhone, faPowerOff, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import mapimg from '../../../images/map.jpg'

const Contactus = () => {
    const contactStyle = {
        backgroundImage: `url(${mapimg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        // marginBottom: '30px',

    }
    return (
        <div className="mt-5 mb-5">
            <h1 className="text-center">CONTUCT US</h1>
           <div className="container-fluid" style={contactStyle}>
               <div className="row">
                   <div className="col-md-6">
                       <div className="shadow-lg p-3 mb-5 bg-body rounded mt-5 m-5">
                       <h3 className="text-center">CONTACT</h3>
                       <p><FontAwesomeIcon icon={faSimplybuilt}/>  Raselahmed4star@gmail.com</p>
                       <p><FontAwesomeIcon icon={faPhone}/>  +8801790173857</p>
                       <p><FontAwesomeIcon icon={faPenSquare}/>  Airasel.ml</p>
                       <p><FontAwesomeIcon icon={faStoreAlt}/>  398,South Jangla, Sultanpur, brahamnbaria Sadar, Brahmanbaria</p>
                       <p><FontAwesomeIcon icon={faPowerOff}/>  Mon-Sun 9.00 Am - 12.00 Am</p>
                       </div>

                   </div >
                   <div className="col-md-6 mb-5">

                   </div>
               </div>

           </div>
        </div>
    );
};

export default Contactus;