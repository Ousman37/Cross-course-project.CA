// Import cart-related functions and variables
import cart, { removeFromCart, renderCartQuantity } from './cart.js';

const productListURL = 'https://startwebsolution.com/wp-json/wc/v3/products?consumer_key=ck_47853e2df96ba65807d856cfe84cc229618f2ba6&consumer_secret=cs_d257f6fd840118c8fe85ac0545c5f535c1d73cb3';
const checkoutCart = document.querySelector('.product-cart-container');

checkoutCart.innerHTML = '<p>Loading...</p>';

fetch(productListURL)
    .then(response => response.json())
    .then(productsData => {
        checkoutCart.innerHTML = '';

        productsData.forEach(product => {
            const productId = product.id;
            const cartItem = cart.find(cartItem => cartItem.productId === productId);

            if (cartItem) {
                const checkoutItemHTML = `
                    <div class="checkout-item js-cart-item-container-${productId}">
                        <div><img src="${product.images[0].src}" alt="${product.name}" class="checkout-item-image"></div>
                        <div class="checkoutText">
                            <h2>${product.name}</h2>
                            <p>${product.description}</p>
                            <h2>$${product.price}</h2>
                            <div class="remove">
                                (${cartItem.quantity}) <button class="remove-button js-delete-button" data-product-id="${productId}">Remove</button>
                            </div>
                        </div>
                    </div>
                `;

                checkoutCart.innerHTML += checkoutItemHTML;

                // Add event listener for "Remove" button
                addRemoveButtonEventListener(productId);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });

renderCartQuantity();

// Function to add event listener for "Remove" button
function addRemoveButtonEventListener(productId) {
    const removeButton = document.querySelector(`.js-delete-button[data-product-id="${productId}"]`);
    if (removeButton) {
        removeButton.addEventListener('click', () => {
            removeFromCart(productId); // Call the removeFromCart function

            // Remove the item container from the cart
            const itemContainer = document.querySelector(`.js-cart-item-container-${productId}`);
            if (itemContainer) {
                itemContainer.remove();
            }

            renderCartQuantity();
        });
    }
}
