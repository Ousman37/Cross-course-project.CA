// Import cart-related functions and variables
import cart, { removeFromCart, renderCartQuantity } from './cart.js';

const consumerKey = 'ck_47853e2df96ba65807d856cfe84cc229618f2ba6';
const consumerSecret = 'cs_d257f6fd840118c8fe85ac0545c5f535c1d73cb3';

const baseUrl = `https://startwebsolution.com/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

// Check if the page is the checkout page
const isCheckoutPage = window.location.href.includes('checkout.html');

async function getProducts(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

function filterAndDisplayProducts(products) {
    try {
        const productsGridContainer = document.querySelector('.products-image-grid');

        if (!productsGridContainer) {
            console.error('Products grid container not found.');
            return;
        }

        // Clear the existing content
        productsGridContainer.innerHTML = '';

        products.forEach((product) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            const imageElement = document.createElement('img');
            imageElement.src = product.images[0].src;
            imageElement.alt = product.name;

            const productNameElement = document.createElement('h3');
            productNameElement.textContent = product.name;

            const productPriceElement = document.createElement('p');
            productPriceElement.textContent = `Price: $${product.price}`;

            const productDescriptionElement = document.createElement('p');
            if (product.description) {
                productDescriptionElement.innerHTML = product.description;
            }

            const actionButton = document.createElement('button');
            if (isCheckoutPage) {
                // On the checkout page, display a "Remove" button
                actionButton.textContent = 'Remove';
                actionButton.style.backgroundColor = 'red';
                actionButton.style.color = 'white';
                actionButton.style.padding = '5px 10px'; 
                actionButton.style.marginBottom = '10px'; 
                actionButton.style.marginTop = '15px'; 
                actionButton.addEventListener('click', () => {
                    // Call the removeFromCart function here
                    removeFromCart(product.id);
                    // Remove the product element from the page
                    productElement.remove();
                    // Update the cart quantity display
                    renderCartQuantity();
                    // Remove the item from local storage
                    const updatedCart = cart.filter((item) => item.productId !== product.id);
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                });
            } else {
                // On other pages, display the "View the Product" button
                actionButton.textContent = 'View the Product';
                actionButton.style.backgroundColor = 'blue';
                actionButton.style.color = 'white';
                actionButton.style.marginBottom = '10px'; 
                actionButton.style.marginTop = '15px'; 
                actionButton.style.padding = '10px 20px'; // Add padding here
                actionButton.addEventListener('click', () => {
                    window.location.href = `single-product.html?product_id=${product.id}`;
                });
            }

            productElement.appendChild(imageElement);
            productElement.appendChild(productNameElement);
            productElement.appendChild(productPriceElement);
            productElement.appendChild(productDescriptionElement);
            productElement.appendChild(actionButton);

            productsGridContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error filtering and displaying products:', error);
    }
}

// Function to handle checkbox and search input changes
function handleFilterAndSearch() {
    try {
        // Check if the loader element exists
        const loader = document.querySelector('.loader');

        if (loader) {
            loader.style.display = 'block';

            // Get the search input value
            const searchInput = document.querySelector('#search-input');
            const searchQuery = searchInput ? searchInput.value.trim() : '';

            // Construct the URL with the search query
            const searchUrl = searchQuery
                ? `${baseUrl}&search=${encodeURIComponent(searchQuery)}`
                : baseUrl;

            getProducts(searchUrl)
                .then((products) => {
                    if (loader) {
                        loader.style.display = 'none';
                    }
                    filterAndDisplayProducts(products);
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
                    if (loader) {
                        loader.style.display = 'none';
                    }
                });
        } else {
            console.error('Loader element not found.');
        }
    } catch (error) {
        console.error('Error in handleFilterAndSearch:', error);
    }
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        handleFilterAndSearch();

        const searchInput = document.querySelector('#search-input');
        const featuredCheckbox = document.querySelector('#featured-checkbox');
        const premiumCheckbox = document.querySelector('#premium-checkbox');
        const simpleCheckbox = document.querySelector('#simple-checkbox');
        const productsPerPageSelect = document.querySelector('#products-per-page');

        if (searchInput) {
            searchInput.addEventListener('input', handleFilterAndSearch);
        }

        if (featuredCheckbox || premiumCheckbox || simpleCheckbox || productsPerPageSelect) {
            const checkboxes = [featuredCheckbox, premiumCheckbox, simpleCheckbox, productsPerPageSelect];
            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener('change', handleFilterAndSearch);
            });
        }
    } catch (error) {
        console.error('Error in DOMContentLoaded event:', error);
    }
});

renderCartQuantity();

