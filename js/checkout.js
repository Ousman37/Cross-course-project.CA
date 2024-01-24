import { initializeCart, renderCartQuantity, removeFromCart } from './cart.js';

// Initialize the cart when the module is loaded
initializeCart();

const productListURL = 'https://startwebsolution.com/wp-json/wc/v3/products?consumer_key=ck_47853e2df96ba65807d856cfe84cc229618f2ba6&consumer_secret=cs_d257f6fd840118c8fe85ac0545c5f535c1d73cb3';
const checkoutCart = document.querySelector('.product-cart-container');

checkoutCart.innerHTML = '<p>Loading...</p>';

fetch(productListURL)
  .then(response => response.json())
  .then(productsData => {
    checkoutCart.innerHTML = '';

    productsData.forEach(product => {
      const productId = product.id;
      const cartData = JSON.parse(localStorage.getItem('cart'));

      if (cartData) {
        const cartItem = cartData.find(cartItem => cartItem.productId === productId);

        if (cartItem) {
          const checkoutItemHTML = `
            <div class="checkout-item js-cart-item-container-${productId}">
              <div class="checkout-item-image">
                <img src="${product.images[0].src}" alt="${product.name}">
              </div>
              <div class="checkoutText">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <h2>$${product.price}</h2>
                <div class="remove">
                  (${cartItem.quantity}) <button class="remove js-delete-button" data-product-id="${productId}">Remove item</button>
                </div>
              </div>
            </div>
          `;

          checkoutCart.innerHTML += checkoutItemHTML;
        }
      }
    });

    document.querySelectorAll('.js-delete-button')
      .forEach((button) => {
        button.addEventListener('click', () => {
          const productId = button.dataset.productId;
          removeFromCart(productId);

          const itemContainer = document.querySelector(`.js-cart-item-container-${productId}`);
          if (itemContainer) {
            itemContainer.remove();
          }

          renderCartQuantity();
        });
      });

    renderCartQuantity();
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
