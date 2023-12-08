function showInfo(rex) {
    console.log('Clicou no card: ');
    var ficha = document.getElementById('ficha-rex');
    ficha.classList.add('show');
}


function fecharFicha(rex) {
    var ficha = document.getElementById('ficha-rex');
    ficha.classList.remove('show');
}

