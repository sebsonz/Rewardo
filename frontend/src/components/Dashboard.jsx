<<<<<<< HEAD
﻿import React, {useState,useEffect} from 'react';
import axios from 'axios';
import OfferCard from './OfferCard.jsx';
export default function Dashboard(){
  const [offers,setOffers]=useState([]); const [me,setMe]=useState(null);
  const token = localStorage.getItem('token');
  async function fetchMe(){
    try{
      const r = await axios.get('http://localhost:4000/api/auth/me',{headers:{Authorization:'Bearer '+token}});
      setMe(r.data);
      const off = await axios.get('http://localhost:4000/api/offers?location='+r.data.country,{headers:{Authorization:'Bearer '+token}});
      setOffers(off.data);
    }catch(e){ console.error(e); }
  }
  useEffect(()=>{ fetchMe(); },[]);
  function logout(){ localStorage.removeItem('token'); window.location.href='/'; }
  return (<div style={{padding:20}}><h2>Dashboard</h2><div>Welcome {me?.email} - Points: {me?.points} <button onClick={logout} style={{marginLeft:10}}>Logout</button></div><h3>Offers</h3><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:12}}>{offers.map(o=><OfferCard key={o._id || o.id} offer={o} />)}</div></div>);
}
=======
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import OfferCard from './OfferCard.jsx';
export default function Dashboard(){const [offers,setOffers]=useState([]);const [me,setMe]=useState(null);const token = localStorage.getItem('token');async function fetch(){try{const r = await axios.get('http://localhost:3000/api/me',{headers:{Authorization:'Bearer '+token}});setMe(r.data);const off = await axios.get('http://localhost:3000/api/offers?location='+r.data.country,{headers:{Authorization:'Bearer '+token}});setOffers(off.data);}catch(e){ console.error(e);} }useEffect(()=>{ fetch(); },[]);function logout(){ localStorage.removeItem('token'); window.location.href='/'; }return (<div style={{padding:20}}><h2>Dashboard</h2><div>Welcome {me?.email} - Points: {me?.total_points} <button onClick={logout} style={{marginLeft:10}}>Logout</button></div><h3>Offers</h3><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:12}}>{offers.map(o=><OfferCard key={o.id} offer={o} />)}</div></div>);}
>>>>>>> 0d33c1699a3a7ac44d0e1f8f9fe46b20ccb8501d
