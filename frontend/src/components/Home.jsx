<<<<<<< HEAD
﻿import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){
  return (<div style={{padding:24}}><h1>Rewardo</h1><p>Earn points by completing partner surveys.</p><Link to='/register'><button>Get Started</button></Link> <Link to='/login' style={{marginLeft:8}}><button>Login</button></Link></div>);
}
=======
import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){return (<div style={{padding:20}}><h1>Welcome to Rewardo</h1><p>Earn points by completing paid surveys and partner offers.</p><div style={{marginTop:20}}><Link to='/register'><button>Get Started</button></Link><Link to='/login' style={{marginLeft:10}}><button>Login</button></Link></div></div>);}
>>>>>>> 0d33c1699a3a7ac44d0e1f8f9fe46b20ccb8501d
