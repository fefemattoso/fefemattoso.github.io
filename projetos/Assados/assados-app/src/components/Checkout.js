// src/components/Checkout.js
import React from 'react';
import { Button } from 'react-bootstrap';

const Checkout = ({ cartItems, handleCheckout }) => {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - R${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <Button variant="success" onClick={handleCheckout} style={{ backgroundColor: 'black', borderRadius: '5px', border: 'black'}}>Finalizar Pedido</Button>
    </div>
  );
};

export default Checkout;
