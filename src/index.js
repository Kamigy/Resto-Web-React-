
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './components/cart/Cart';



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
      <App />
    </CartProvider>
);
reportWebVitals();