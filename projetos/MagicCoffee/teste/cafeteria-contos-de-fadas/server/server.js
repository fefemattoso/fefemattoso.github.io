const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'seu_host',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'cafeteria_contos_de_fadas'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com o ID ' + db.threadId);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para obter a lista de produtos
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM ItensCardapio';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send({ success: false, message: 'Erro ao obter os produtos.' });
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
