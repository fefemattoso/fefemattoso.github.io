// Transição da capa para a galeria
document.getElementById('entrar').addEventListener('click', () => {
  document.getElementById('capa').style.display = 'none';
  document.getElementById('galeria').style.display = 'block';
});

// Abrir ficha técnica
document.querySelectorAll('.inseto').forEach(inseto => {
  inseto.addEventListener('click', () => {
    const id = inseto.dataset.ficha;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(id).classList.add('ativa');
  });
});

// Fechar ficha técnica
function fecharFicha() {
  document.getElementById('overlay').style.display = 'none';
  document.querySelectorAll('.ficha').forEach(f => f.classList.remove('ativa'));
}
