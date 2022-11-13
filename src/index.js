import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import MoviesWrapperCtx from 'context/MoviesCtx';
import { BASE_PATH } from 'variabels/variabels';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <MoviesWrapperCtx>
        <App />
      </MoviesWrapperCtx>
    </BrowserRouter>
  </React.StrictMode>
);
