import React from 'react';
import footerlogo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor:"#212529", height:"100%", overflow:"hidden", marginTop:"90px"}}>
<div className="container">
    <div className="row">
    <div className="col-md-6 mt-2">
        <img src={footerlogo} alt="" />
        <hr style={{color:"#395A7D", width:"50%"}}/>
        <p style={{color:"#395A7D",marginTop:"30%"}}>Copyright @ Ashiqul Islam Rasel</p>

    </div>
    <div className="col-md-6 mt-5">
        <div className="row">
        <div className="col-md-6 text-white">
            <p>About Online shop</p>
            <p>Read Our blog</p>
            <p>Sign up to Deliver</p>
            <p>Add your choice</p>
            <hr />
        </div>
        <div className="col-md-6 text-white">
            <p>Get help</p>
            <p>Read FAQs</p>
            <p>View all cities</p>
            <p>Shop near me</p>
            <hr />
        </div>
        </div>
    </div>
    </div>
</div>

</div>
        </div>
    );
};

export default Footer;