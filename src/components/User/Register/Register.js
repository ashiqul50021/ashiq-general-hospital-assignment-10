import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Register.css';
// import swal from '@sweetalert/with-react';
// import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import loginimg from '../../../images/login.png';
import loginbg from '../../../images/loginbg.jpg';
const Register = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin, isLogin, error, handleNameChange,
    } = useAuth();

    const loginStyle = {
        backgroundImage: `url(${loginbg})`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',

    }
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri =  location.state?.from || '/home';
    // console.log('came from', location.state?.from);

    // const handleGoogleLogin = () => {
    //     signInUsingGoogle()
    //         .then(result  => {
    //             history.push(location.state?.from || '/home');
    //         })
    // }

    return (
        <div style={loginStyle}>
            <div style={{  }}>
            <h3 className="text-center">Please Login</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form style={{borderRadius:'20px'}} onSubmit={handleRegistration} className=" shadow p-3 mb-5 bg-body m-5">
                            <div class="mb-3">
                                {
                                    !isLogin && <div>

                                        <input style={{ backgroundColor: '#EBF0FC' }} type="text" class="border-0 mt-3 rounded-pill form-control" id="name" placeholder="User Name" onBlur={handleNameChange} />
                                    </div>
                                }

                                <input onBlur={handleEmailChange} style={{ backgroundColor: '#EBF0FC' }} type="email" class="border-0 mt-3 rounded-pill form-control" placeholder="Email Address" required />

                            </div>
                            <div class="mb-3">

                                <input onBlur={handlePasswordChange} style={{ backgroundColor: '#EBF0FC' }} type="password" class="border-0 mt-3 rounded-pill form-control" placeholder="Password" required />
                            </div>

                            <input onChange={toggleLogin} type="checkbox" name="checkbox" id="checkbox" className='mx-1'/>
                            <label htmlFor="checkbox"> Already Register?</label>
                           


                            {
                                error &&

                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            }

                            <button style={{marginLeft:'245px'}} class="btn register-button" type="submit"> {
                                isLogin ?
                                    'Login'
                                    :
                                    'Registration!'
                            }</button>





                            <hr />
                            <div className="d-flex">
                                <p className='mx-2'>login with: </p>
                                <button onClick={signInUsingGoogle} style={{borderRadius:'50px', backgroundColor:'white'}} type="submit" class="btn btn-light border google-button"><FontAwesomeIcon icon={faGoogle} /></button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-6">
                        {/* <img src={loginimg} style={{ height: "100%", width:'100%' }} alt="" /> */}
                    </div>
                </div>
            </div>


        </div>
        </div>
    );
};


export default Register;

