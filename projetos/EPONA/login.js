// login.js
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Implementar a autenticação real aqui.
    // Exemplo simplificado:
    if (username && password) {
        alert('Login realizado com sucesso!');
        window.location.href = 'home.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
