<?php
// Conectar ao banco de dados (substitua as informações de acordo com o seu banco)
$servername = "seu_servidor";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter o script SQL do formulário
    $script = $_POST["script"];

    // Executar o script no banco de dados
    if ($conn->multi_query($script)) {
        echo "<div class='alert alert-success' role='alert'>Script executado com sucesso!</div>";
    } else {
        echo "<div class='alert alert-danger' role='alert'>Erro ao executar o script: " . $conn->error . "</div>";
    }
}

// Fechar a conexão com o banco de dados
$conn->close();
?>
