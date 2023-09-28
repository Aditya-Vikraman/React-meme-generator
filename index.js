import React from 'react';
import ReactDOM from 'react-dom/client';

import MemeGenerator from "./mini-projects/Meme-generator"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemeGenerator />
  </React.StrictMode>
);