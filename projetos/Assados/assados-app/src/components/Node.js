const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { content } = req.body;

  const msg = {
    to: 'test@example.com', // Email do vendedor
    from: 'test@example.com', // Seu próprio endereço de e-mail
    subject: 'Novo Pedido',
    html: content, // Conteúdo do e-mail
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).send('Erro ao enviar e-mail.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
