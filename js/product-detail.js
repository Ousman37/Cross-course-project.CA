// Import necessary functions from cart.js
import { addToCart, renderCartQuantity } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
    // Define your WooCommerce API URL with consumer_key and consumer_secret
    const consumerKey = 'ck_47853e2df96ba65807d856cfe84cc229618f2ba6';
    const consumerSecret = 'cs_d257f6fd840118c8fe85ac0545c5f535c1d73cb3';

    const baseUrl = `https://startwebsolution.com/wp-json/wc/v3/products`;

    // Extract product ID from the URL using the correct query parameter name
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id'); // Use the correct query parameter name

    if (!productId) {
        console.error('Product ID not found in URL');
    } else {
        // Use the productId to fetch the specific product details
        const productDetailURL = `${baseUrl}/${productId}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

        // Select elements in the DOM to populate with product details
        const productName = document.querySelector('.product-name');
        const productPrice = document.querySelector('.product-price');
        const productDescription = document.querySelector('.product-description');
        const productImage = document.querySelector('.product-image');
        const addToCartButton = document.querySelector('.add-to-cart-button');

        // Fetch the product details
        fetch(productDetailURL)
            .then(response => response.json())
            .then(product => {
                // Populate the elements with product details
                productName.textContent = product.name;
                productPrice.textContent = `$${product.price}`;
                productDescription.innerHTML = product.description;
                productImage.src = product.images[0].src;
                productImage.classList.add('small-responsive-image');

                // Set up event listener for the "Add to Cart" button
                addToCartButton.addEventListener('click', () => {
                    // Use the product ID (productId) to identify the product
                    addToCart(productId);

                    // After adding to the cart, update the cart quantity display
                    renderCartQuantity();
                });
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }
});
