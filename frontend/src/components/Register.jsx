<<<<<<< HEAD
﻿import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
export default function Register(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [country,setCountry]=useState('FR'); const [err,setErr]=useState(''); const nav=useNavigate();
  async function handle(){ try{ await axios.post('http://localhost:4000/api/auth/register',{email,password,country}); nav('/login'); }catch(e){ setErr(e.response?.data?.error || 'Erreur'); } }
  return (<div style={{padding:20}}><h2>Register</h2><input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/><br/><input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)}/><br/><input placeholder='Country' value={country} onChange={e=>setCountry(e.target.value)}/><br/><button onClick={handle}>Register</button><p style={{color:'red'}}>{err}</p><p>DÃ©jÃ  inscrit? <Link to='/login'>Login</Link></p></div>);
}
=======
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
export default function Register(){const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [country,setCountry]=useState('FR'); const [err,setErr]=useState(''); const nav=useNavigate(); async function handle(){try{ await axios.post('http://localhost:3000/api/register',{email,password,country}); nav('/login'); }catch(e){ setErr(e.response?.data?.error || 'Erreur'); }} return (<div style={{padding:20}}><h2>Register</h2><input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/><br/><input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)}/><br/><input placeholder='Country' value={country} onChange={e=>setCountry(e.target.value)}/><br/><button onClick={handle}>Register</button><p style={{color:'red'}}>{err}</p><p>Déjà inscrit? <Link to='/login'>Login</Link></p></div>);}
>>>>>>> 0d33c1699a3a7ac44d0e1f8f9fe46b20ccb8501d
