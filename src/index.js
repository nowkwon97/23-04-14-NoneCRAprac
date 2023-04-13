import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './login.js';

const App = () => {
  return <LoginPage>Hello World!!!</LoginPage>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
