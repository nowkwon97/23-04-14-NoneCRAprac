import React from 'react';
import ReactDOM from 'react-dom';
import StartPage from './startScreen';
import { createRoot } from 'react-dom/client'


const App = () => {
  return <StartPage />;
};

createRoot(document.getElementById('root')).render(<App />);
