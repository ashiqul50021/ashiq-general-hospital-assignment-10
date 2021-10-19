import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DoctorsBooked from './components/HomePage/DoctorsBooked/DoctorsBooked/DoctorsBooked';
import Doctorslist from './components/HomePage/Doctorslist/Doctorslist';
import Footer from './components/HomePage/Footer/Footer';
import Home from './components/HomePage/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/HomePage/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Register from './components/User/Register/Register';

import AuthProvider from './context/AuthProvider';
import Ourservice from './components/HomePage/OurService/Ourservice';
import Contactus from './components/HomePage/Contactus/Contactus';

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
            <Route exact path="/ourservice">

              <Ourservice></Ourservice>
            </Route>
            <PrivateRoute exact path="/contactus">

              <Contactus></Contactus>
            </PrivateRoute>
           
            <PrivateRoute exact path="/doctorsBooked/:doctorsId">

              <DoctorsBooked></DoctorsBooked>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>

            </Route>

          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
