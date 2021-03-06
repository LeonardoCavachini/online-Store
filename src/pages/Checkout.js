import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../image/back.png';
import ProductRevised from '../components/ProductRevised';

export default function Checkout() {
  const local = JSON.parse(localStorage.cart);
  return (
    <div>
      <div>
          <Link to="/"><img src={Back} alt="back"/></Link>
        </div>
      <ProductRevised local={ local } />
    </div>
  );
}
