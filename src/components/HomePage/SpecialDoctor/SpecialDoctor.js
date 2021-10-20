import React from 'react';
import bg from '../../../images/doctorimg.jpg';
import doctorimg2 from '../../../images/doctorimg2.png';
import './SpecialDoctor.css'

const SpecialDoctor = () => {
    const doctorImg = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',

    }
    return (
       
            <div className="container-fluid" style={doctorImg}>
                <div className="row" >
                    <div className="col-md-6 bg-color">
                        <div>
                            <div className="text-color m-5 mb-5  ">

                                <h2 className="mb-4">Welcome to <br />Ashiq General Hospital</h2>

                                <h6>we are working 24/7 and our doors are <br /> open to everybody!</h6>
                                <hr />
                                <p>we provide best service to people our doctor are serve properly.A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment. The best-known type of
                                    Thus in-patient medical care in the sense of what we today</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div>
                    <img style={{height:'465px', widows:'20%'}} src={doctorimg2} alt="" />
                    </div>
                    </div>
                </div>
            </div>
      
        // <div className="mt-5 mb-5 row-height banner-height">
        //     <div className="container-fluid " style={doctorImg}>
        //         <div className="row ">
        //             <div className="col-md-6 bg-color">
        //                 <div className="text-color m-5 mb-5 ">

        //                         <h2 className="mb-4">Welcome to <br />Ashiq General Hospital</h2>

        //                         <h6>we are working 24/7 and our doors are <br /> open to everybody!</h6>
        //                         <p>we provide best service to people our doctor are serve properly.A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment. The best-known type of
        //                             Thus in-patient medical care in the sense of what we today</p>

        //                 </div>
        //             </div>
        //             <div className="col-md-6">
        //                 <img className="" src={doctorimg2} alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SpecialDoctor;