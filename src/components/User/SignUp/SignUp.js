// import React, { useState } from 'react';
// import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import initializeAuthentication from '../../../Firebase/firebase.initialize';



// const provider = new GoogleAuthProvider();


// initializeAuthentication();

// const SignUp = () => {
//     const auth = getAuth();
//     const [user, setUser] = useState({});
//     const [email, setEmail] =useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [isLogin, setIsLogin] = useState(false);

//     const handleGoogleSignIn = () => {

//         signInWithPopup(auth, provider)
//             .then(result => {
//                 const { displayName, email, photoURL } = result.user;
//                 const loggedInUser = {
//                     name: displayName,
//                     email: email,
//                     photo: photoURL
//                 };
//                 setUser(loggedInUser)
//                 console.log(user);
//             })
//             .catch(error => {
//                 console.log(error.message);
//             })

//     }
//     const handleSignOut = () => {

//         signOut(auth)
//             .then(() => {
//                 setUser({});
//             })
//     }

//     const toggleLogin = e =>{
//         setIsLogin(e.target.checked)
//     }

//     const handleEmailChange = e =>{
//         setEmail(e.target.value);

//     }
//     const handlePasswordChange = e =>{
//         setPassword(e.target.value);

//     }

//     const handleRegistration = e => {
//         e.preventDefault();
//         console.log(email, password);
//         if (password.length < 6) {
//             setError('Password Must be at least 6 characters long.')
//             return;
//         }
//         if (!/(?=.*[A-Z].*[A-Z])/.test(password)){
//             setError('Password must contain 2 Upper case');
//             return;
//         }

//         isLogin? processLogin(email, password): registerNewUser(email,password);


      
        

//     }

   



//     const processLogin = (email, password) => {
//         signInWithEmailAndPassword(auth, email, password)
//         .then(result => {
//             const user = result.user;
//             console.log(user);
//             setError('');
//         })
//         .catch(error =>{
//             setError(error.message);
//         })

//     }

//     const registerNewUser = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password)
//         .then(result => {
//             const user = result.user;
//             console.log(user);
//             setError('');
//         })
//         .catch(error =>{
//             setError(error.message);
//         }) 

//     }


//     return (
//         <div>
//             <form onSubmit={handleRegistration}>
//                 <h3>Please Register</h3>
//                 <label htmlFor="email">Email:</label>
//                 <input onBlur={handleEmailChange} type="email" name="email" id="email" required/><br />
//                 <label htmlFor="password">Password:</label>
//                 <input onBlur={handlePasswordChange} type="password" name="password" id="password" required/>
//                 <br />
//                 <input onChange={toggleLogin} type="checkbox" name="checkbox" id="checkbox" />
//                 <label htmlFor="checkbox">Already Register?</label>
//                 <div>{error}</div>
//                 <button type="submit">{isLogin ? 'Login' :  'Registration!'}</button>
//             </form>


//             {
//                 !user.name ?
//                     <button onClick={handleGoogleSignIn}>Google Sign In</button>
//                     :
//                     <button onClick={handleSignOut}>Sign Out</button>}
//             <br />
//             {
//                 user.email &&
//                 <div>
//                     <h2>Welcome {user.name}</h2>
//                 </div>
//             }
//         </div>
//     );
// };

// export default SignUp;