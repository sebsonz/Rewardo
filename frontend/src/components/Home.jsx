import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){return (<div style={{padding:20}}><h1>Welcome to Rewardo</h1><p>Earn points by completing paid surveys and partner offers.</p><div style={{marginTop:20}}><Link to='/register'><button>Get Started</button></Link><Link to='/login' style={{marginLeft:10}}><button>Login</button></Link></div></div>);}