import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from '../../pages/login';
import SignIn from '../../pages/signin';
import Dashboard from '../../pages/dashboard';
import authService from '../../services/auth-service';
import { getUser } from '../../slices/auth-slice';

function App() {
  const isAuth = useSelector(state => state.auth.userToken);
  const { getAuth } = authService;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = await getAuth();
  //     return user;
  //   };

  //   fetchData().catch(console.error);
  // }, []);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        <Route
          path="dashboard"
          element={isAuth ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
