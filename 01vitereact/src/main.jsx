import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { StrictMode } from 'react';


function MyApp(){
    
    return(
        <div>
            <h1>MY App </h1>
        </div>
    )
}

const reactElement = {
    type: 'a',
    props :{
        href : 'https://google.com',
        target : '_blank'

    },
children : 'Click me to visit google'
}
const root = createRoot(document.getElementById('root'));
root.render(
 
    reactElement()
  
);
