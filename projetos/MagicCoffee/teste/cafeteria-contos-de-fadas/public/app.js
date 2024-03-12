$(document).ready(function () {
  loadProducts();

  function loadProducts() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/products',
      success: function (products) {
        displayProducts(products);
      },
      error: function () {
        alert('Erro ao carregar produtos.');
      }
    });
  }

  function displayProducts(products) {
    const container = $('#products-container');
    container.empty();

    products.forEach(product => {
      const productCard = `
        <div class="card" style="width: 18rem;">
          <img src="product-image-placeholder.jpg" class="card-img-top" alt="Imagem do Produto">
          <div class="card-body">
            <h5 class="card-title">${product.nome_item}</h5>
            <p class="card-text">${product.descricao}</p>
            <p class="card-text">Preço: $${product.preco}</p>
            <button class="btn btn-primary">Adicionar ao Carrinho</button>
          </div>
        </div>
      `;

      container.append(productCard);
    });
  }
});
