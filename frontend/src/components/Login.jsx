import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState('');
  const nav = useNavigate();
  async function handle(){
    try{
      const r = await axios.post('http://localhost:4000/api/auth/login',{email,password});
      localStorage.setItem('token', r.data.token);
      nav('/dashboard');
    }catch(e){ setErr(e.response?.data?.error || 'Erreur'); }
  }
  return (<div style={{padding:20}}><h2>Login</h2><input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/><br/><input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)}/><br/><button onClick={handle}>Login</button><p style={{color:'red'}}>{err}</p><p>Pas inscrit? <Link to='/register'>Register</Link></p></div>);
}
