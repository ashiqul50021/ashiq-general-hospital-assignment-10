import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    // const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));


    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // const signInUsingGithub = () => {
    //     signInWithPopup(auth, githubProvider)
    //         .then(result => {
    //             setUser(result.user);
    //         })
    // }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
      
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    // handle name
    const handleNameChange = e => {
        setName(e.target.value);
    }

    // handle email 
    const handleEmailChange = e => {
        setEmail(e.target.value);

    }

    // toggle login
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    // handle password 
    const handlePasswordChange = e => {
        setPassword(e.target.value);

    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 Upper case');
            return;
        }

        isLogin ? processLogin(email, password) : registerNewUser(email, password);





    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    return {
        user,
        name,
        error,
        password,
        email,
        isLogin,
        signInUsingGoogle,
        isLoading,
        // signInUsingGithub,
        logout,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        setUserName,
        toggleLogin
    }
}
export default useFirebase;