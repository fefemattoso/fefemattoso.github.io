import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de validação de login
    if (email === 'henrique@example.com' && password === '123') {
      handleLogin({ name: 'Henrique', email: email, address: 'Rua Exemplo, 123' });
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', backgroundColor: '#3a1e22', borderRadius: '50px', marginTop: '200px' }}>
      <style>
        {`
          .login-container {
            color: yellow;
            background-color: #ffd700;
            padding: 20px;
            border-radius: 30px;
          }
          body{
            background-color: white;
          }
        `}
      </style>
      <div className="login-container" style={{ color: 'black', padding: '20px', borderRadius: '30px' }}>
        <h2>Bem-vindo</h2>
        <p>Por favor, faça login para continuar</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ backgroundColor: 'black', borderRadius: '5px', border: 'black', marginTop: '20px'}}>
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
