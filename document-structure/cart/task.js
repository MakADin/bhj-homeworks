document.addEventListener('DOMContentLoaded', function () {
  const cartProducts = document.querySelector('.cart__products');
  const products = [...document.querySelectorAll('.product')];

  products.forEach((product) => {
    const productImageSrc = product.querySelector('.product__image').src;
    const productId = product.dataset.id;
    const addButton = product.querySelector('.product__add');
    const quantityValue = product.querySelector('.product__quantity-value');
    const decButton = product.querySelector('.product__quantity-control_dec');
    const incButton = product.querySelector('.product__quantity-control_inc');

    addButton.addEventListener('click', () => {
      const quantity = parseInt(quantityValue.textContent);
      const existingProductInCart = cartProducts.querySelector(
        `.cart__product[data-id="${productId}"]`
      );

      if (existingProductInCart) {
        const existingCount =
          existingProductInCart.querySelector(`.cart__product-count`);
        existingCount.textContent =
          parseInt(existingCount.textContent) + quantity;
      } else {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = productId;

        const image = document.createElement('img');
        image.classList.add('cart__product-image');
        image.src = productImageSrc;

        const productCount = this.createElement('div');
        productCount.classList.add('cart__product-count');
        productCount.textContent = quantity;

        cartProduct.appendChild(image);
        cartProduct.appendChild(productCount);
        cartProducts.appendChild(cartProduct);
      }
    });

    decButton.addEventListener('click', () => {
      let quantity = parseInt(quantityValue.textContent);
      if (quantity > 1) {
        quantityValue.textContent = --quantity;
      }
    });

    incButton.addEventListener('click', () => {
      let quantity = parseInt(quantityValue.textContent);
      quantityValue.textContent = ++quantity;
    });
  });
});
