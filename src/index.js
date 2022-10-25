import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HeroContextProvider } from './context/hero.context';
import "./styles/reset.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroContextProvider>
      <App />
    </HeroContextProvider>
  </React.StrictMode>
);