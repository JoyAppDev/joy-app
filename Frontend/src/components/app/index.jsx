import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from '../../pages/login';
import SignIn from '../../pages/signin';
import Dashboard from '../../pages/dashboard';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import RequireAuth from "../../hoc/RequireAuth";
//import ProtectedRoute from "../protected-route";

function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);

    let navigate = useNavigate();

    // check token for authorization
    // const token = '0b7d621f3284500d0f6bb091758199b94cb6d99a';

    React.useEffect(() => {
        checkToken()
    }, []);

    const checkToken = () => {

        const token = localStorage.getItem('jwt');
        console.log('jwt', token);
        if (token) {
            auth.checkToken(token)
                .then((response) => {
                    setCurrentUser(response.username);
                    setLoggedIn(true);
                    navigate('/dashboard');
                    console.log("user", response.username);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else if (token === null) {
            //handleSignOut();
            alert('no token');
        }
    }


  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className="page">
              <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route path="register" element={<SignIn />} />
                  <Route path="dashboard" element={
                      <RequireAuth>
                          <Dashboard />
                      </RequireAuth>
                  } />
              </Routes>
          </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
