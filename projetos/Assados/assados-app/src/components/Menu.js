// src/components/Menu.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Menu = ({ menuItems, addToCart }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: '#3a1e22', borderRadius: '50px', marginTop: '100px', flexDirection: 'column'}}>
      <style>
        {`
          body{
            background-color: white;
            
          }
          .menu-card {
            margin-bottom: 20px;
            background-color: #ffd700;
          }
          .add{
            background-color: #3a1e22;
            border: black;
          }
          button{
            border-radius: 5px;
            border: grey;
          }
        `}
      </style>
      <h2 style={{ color: '#ffd700'}}>Cardápio</h2>
      {menuItems.map((item) => (
        <Card key={item.id} className="menu-card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>R${item.price.toFixed(2)}</Card.Text>
            <Button className='add' variant="primary" onClick={() => addToCart(item)}>Adicionar ao carrinho</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Menu;
