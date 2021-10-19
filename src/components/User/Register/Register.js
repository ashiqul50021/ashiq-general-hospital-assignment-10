import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import loginimg from '../../../images/login.png';
const Register = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin, isLogin, error, handleNameChange,
         } = useAuth();
    return (
        <div style={{ marginTop: "25px" }}>
<h3 className="text-center">PLEASE LOGIN!</h3>
<div className="container">
    <div className="row">
        <div className="col-md-6">
            <form  onSubmit={handleRegistration} className="rounded shadow-lg p-3 mb-5 bg-body m-5">
                <div class="mb-3">
                {
                    !isLogin && <div>
                        
                        <input style={{ backgroundColor: '#EBF0FC' }} type="text" class="border-0 mt-3 rounded-pill form-control" id="name" placeholder="User Name" onBlur={handleNameChange} />
                    </div>
                }

                    <input onBlur={handleEmailChange} style={{ backgroundColor: '#EBF0FC' }} type="email" class="border-0 mt-3 rounded-pill form-control"  placeholder="Email Address" required />

                </div>
                <div class="mb-3">

                    <input onBlur={handlePasswordChange} style={{ backgroundColor: '#EBF0FC' }} type="password" class="border-0 mt-3 rounded-pill form-control"  placeholder="Password" required />
                </div>
                
                <input onChange={toggleLogin} type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Already Register?</label>
                <div>{error}</div>
                    <button class="btn btn-primary  rounded-pill" type="submit"> {
                        isLogin ?
                            'Login'
                            :
                            'Registration!'
                    }</button>
                    

                


                <hr />
               
                <button onClick={signInUsingGoogle} type="submit" class="btn btn-light border"><FontAwesomeIcon icon={faGoogle} /> Sign In with google</button>
                
            </form>
        </div>
        <div className="col-md-6">
            <img src={loginimg} style={{ height: "350px" }} alt="" />
        </div>
    </div>
</div>


</div> 
    );
};


export default Register;