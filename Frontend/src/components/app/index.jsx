import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../../pages/login';
import SignIn from '../../pages/signin';
import Dashboard from '../../pages/dashboard';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import RequireAuth from '../../hoc/RequireAuth';
import { CREATOR_DASHBOARD, LOGIN } from '../../utils/constants';

function App() {
    const [currentUser, setCurrentUser] = React.useState({});

    let navigate = useNavigate();

    // check token for authorization
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
                    navigate(CREATOR_DASHBOARD);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else if (token === null) {
            navigate(LOGIN);
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
