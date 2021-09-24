import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BlockFlix from './blockflix';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlockFlix />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
