// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import loginimg from '../../../images/login.png'

// const Login = () => {
//     const { signInUsingGoogle } = useAuth();
//     return (
//         <div style={{ marginTop: "25px" }}>
//             <h3 className="text-center">PLEASE LOGIN!</h3>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <form className="rounded shadow-lg p-3 mb-5 bg-body m-5">
//                             <div class="mb-3">

//                                 <input style={{ backgroundColor: '#EBF0FC' }} type="email" class="border-0 mt-3 rounded-pill form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />

//                             </div>
//                             <div class="mb-3">

//                                 <input style={{ backgroundColor: '#EBF0FC' }} type="password" class="border-0 mt-3 rounded-pill form-control" id="exampleInputPassword1" placeholder="Password" />
//                             </div>
                            
                            
//                                 <button class="btn btn-primary  rounded-pill" type="button">Submit</button>
//                                 <Link to="/register"><p style={{ textDecoration: 'none' }}>New User?</p></Link>

                            


//                             <hr />
//                             <button onClick={signInUsingGoogle} type="submit" class="btn btn-light border"><FontAwesomeIcon icon={faGoogle} /> Sign In with google</button>
//                         </form>
//                     </div>
//                     <div className="col-md-6">
//                         <img src={loginimg} style={{ height: "350px" }} alt="" />
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default Login;