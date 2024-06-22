document.addEventListener('DOMContentLoaded', () => {
    const toggleProductsButton = document.getElementById('toggleProducts');
    const productList = document.getElementById('productList');
    const addToCartButtons = document.querySelectorAll('.addToCart');

    toggleProductsButton.addEventListener('click', () => {
        if (productList.style.display === 'none') {
            productList.style.display = 'flex';
            toggleProductsButton.textContent = 'Esconder Ofertas';
        } else {
            productList.style.display = 'none';
            toggleProductsButton.textContent = 'Mostrar Ofertas';
        }
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });
});
