import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import Checkout from './components/Checkout';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [menuItems] = useState([
    { id: 1, name: 'Assado de Frango', description: 'Delicioso assado de frango', price: 20 },
    { id: 2, name: 'Assado de Carne', description: 'Saboroso assado de carne', price: 25 },
    { id: 3, name: 'Assado de Vegetais', description: 'Opção vegetariana de assado', price: 18 },
  ]);

  const handleLogin = (userData) => {
    // Simulação de autenticação de usuário
    setUser(userData);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    setCartItems([]);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleCheckout = () => {
    // Simulação de armazenamento do pedido
    console.log("Pedido Finalizado:", cartItems);
    setCartItems([]);
  };

  return (
    <div className="container">
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div>
          <Menu menuItems={menuItems} addToCart={addToCart} />
          {cartItems.length > 0 && <Checkout cartItems={cartItems} handleCheckout={handleCheckout} />}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
