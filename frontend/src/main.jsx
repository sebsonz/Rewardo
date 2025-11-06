<<<<<<< HEAD
﻿import React from 'react';
=======
import React from 'react';
>>>>>>> 0d33c1699a3a7ac44d0e1f8f9fe46b20ccb8501d
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
<<<<<<< HEAD
createRoot(document.getElementById('root')).render(
  <BrowserRouter><App/></BrowserRouter>
);
=======
const root = createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App/></BrowserRouter>);
>>>>>>> 0d33c1699a3a7ac44d0e1f8f9fe46b20ccb8501d
