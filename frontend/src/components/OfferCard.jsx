<<<<<<< HEAD
﻿import React from 'react';
import axios from 'axios';
export default function OfferCard({offer}){
  const token = localStorage.getItem('token');
  async function claim(){
    try{
      const r = await axios.post('http://localhost:4000/api/points/add',{points:offer.rewardPoints || offer.rewardPoints, offerId: offer._id || offer.id},{headers:{Authorization:'Bearer '+token}});
      alert('Points received: '+r.data.total);
      window.location.reload();
    }catch(e){ console.error(e); alert('Error'); }
  }
  return (<div style={{border:'1px solid #ddd',padding:12,borderRadius:6}}><h4>{offer.title}</h4><p>{offer.description}</p><p><strong>Points: {offer.rewardPoints || offer.rewardPoints}</strong></p><p>Location: {offer.location}</p><div style={{marginTop:8}}><a href={offer.link} target='_blank' rel='noreferrer'><button>Go to offer</button></a><button onClick={claim} style={{marginLeft:8}}>Claim</button></div></div>);
}
=======
import React from 'react';
import axios from 'axios';
export default function OfferCard({offer}){const token = localStorage.getItem('token');async function claim(){try{const r = await axios.post('http://localhost:3000/api/claim/'+offer.id,{}, {headers:{Authorization:'Bearer '+token}}); alert('Points reçus: '+r.data.points); window.location.reload();}catch(e){console.error(e); alert('Erreur');}}return (<div style={{border:'1px solid #ddd',padding:12,borderRadius:6}}><h4>{offer.title}</h4><p>{offer.description}</p><p><strong>Points: {offer.reward_points || offer.reward_points}</strong></p><p>Location: {offer.location}</p><div style={{marginTop:8}}><a href={offer.link} target='_blank' rel='noreferrer'><button>Go to offer</button></a><button onClick={claim} style={{marginLeft:8}}>Réclamer</button></div></div>);}
>>>>>>> 0d33c1699a3a7ac44d0e1f8f9fe46b20ccb8501d
