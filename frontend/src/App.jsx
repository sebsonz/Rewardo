import React from 'react';
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
