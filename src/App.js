import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DoctorsBooked from './components/HomePage/DoctorsBooked/DoctorsBooked/DoctorsBooked';
import Doctorslist from './components/HomePage/Doctorslist/Doctorslist';
import Footer from './components/HomePage/Footer/Footer';
import Home from './components/HomePage/Home/Home';
import Navbar from './components/HomePage/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import SignUp from './components/User/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">

              <Home></Home>
            </Route>
            <Route exact path="/home">

              <Home></Home>
            </Route>

            <Route path="/doctors">
              <Doctorslist></Doctorslist>
            </Route>
            
            <Route exact path="/register">

              <Register></Register>
            </Route>
           
            <PrivateRoute exact path="/doctorsBooked/:doctorsId">

              <DoctorsBooked></DoctorsBooked>
            </PrivateRoute>
            

          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
