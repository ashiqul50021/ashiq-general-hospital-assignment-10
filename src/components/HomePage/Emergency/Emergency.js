import React from 'react';
import './Emergency.css';
import ambulance from '../../../images/ambulance.png';

const Emergency = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div style={{backgroundColor:'#2290FF'}} className="row">
                <div className="col-md-6 text-white" style={{padding:'40px'}}>
                  <div className='d-flex'> 
                <img style={{height:'40px', width:'60px',marginTop:'10px', marginLeft:'5px',marginRight:'5px'}} src={ambulance} alt="" />
                <div className="div">
                <h4>are you in Emergency? Call our Ambulance</h4>
                    <p>call us to register apoinment at 202-555-0120</p></div>  
                </div>
                    

                </div>
                <div className="col-md-6">
                    <button  className='btn btn emergency-button'>Call us</button>

                </div>
            </div>
            
        </div>
    );
};

export default Emergency;