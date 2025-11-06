<<<<<<< HEAD
﻿import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';

export default function App(){
  const token = localStorage.getItem('token');
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={token ? <Navigate to='/dashboard'/> : <Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={token ? <Dashboard/> : <Navigate to='/login'/>}/>
    </Routes>
  );
}
=======
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Home from './components/Home.jsx';
function App(){const token = localStorage.getItem('token');return (<Routes><Route path='/' element={<Home/>} /><Route path='/login' element={token ? <Navigate to='/dashboard'/> : <Login/>} /><Route path='/register' element={<Register/>} /><Route path='/dashboard' element={token ? <Dashboard/> : <Navigate to='/login'/>} /></Routes>);}export default App;
>>>>>>> 0d33c1699a3a7ac44d0e1f8f9fe46b20ccb8501d
