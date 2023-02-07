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
    const [isLoginError, setIsLoginError] = React.useState(false);
    const [isRegisterError, setIsRegisterError] = React.useState(false);

    let navigate = useNavigate();

    // log out
    const handleLogOut = () => {
        localStorage.clear();
        setCurrentUser({});
        navigate('/');
    }

    // check token for authorization
    React.useEffect(() => {
        checkToken()
    }, []);

    const checkToken = () => {

        const token = localStorage.getItem('token');
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

    // авторизация
    // async
    async function handleLogin(email, password) {
        try {
            const { auth_token } = await auth.authorize(email, password);
            if (auth_token) {
                localStorage.setItem('token', auth_token);
                navigate(CREATOR_DASHBOARD);
            }
        } catch (error) {
            setIsLoginError(true);
            console.log(error);
        }
    }

    // регистрация
    // async
    async function handleRegister({
                                      email,
                                      address,
                                      idNumber,
                                      // paymentInfo,
                                      name,
                                      password }) {
        try {
            await auth.register({
                email,
                address,
                idNumber,
                name,
                password });
            handleLogin(email, password);
        } catch (error) {
            setIsRegisterError(true);
            console.log(error);
        }
    }


  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className="page">
              <Routes>
                  <Route exact path="/" element={
                      <Login onLogin={handleLogin} isError={isLoginError} setIsError={setIsLoginError} />
                  } />
                  <Route path="register" element={
                      <SignIn onRegister={handleRegister} isError={isRegisterError} />
                  } />
                  <Route path="dashboard" element={
                      <RequireAuth>
                          <Dashboard logOut={handleLogOut} />
                      </RequireAuth>
                  } />
              </Routes>
          </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
