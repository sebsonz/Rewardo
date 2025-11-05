import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){
  return (<div style={{padding:24}}><h1>Rewardo</h1><p>Earn points by completing partner surveys.</p><Link to='/register'><button>Get Started</button></Link> <Link to='/login' style={{marginLeft:8}}><button>Login</button></Link></div>);
}
