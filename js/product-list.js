

// Import necessary functions from cart.js
import { addToCart, renderCartQuantity, initializeCart } from './cart.js';

// Call initializeCart to initialize the cart
initializeCart();

// Define your WooCommerce API URL with consumer_key and consumer_secret
const consumerKey = 'ck_47853e2df96ba65807d856cfe84cc229618f2ba6';
const consumerSecret = 'cs_d257f6fd840118c8fe85ac0545c5f535c1d73cb3';

const baseUrl = `https://startwebsolution.com/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

// Function to fetch products from WooCommerce API
async function getProducts(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Function to filter and display products
function filterAndDisplayProducts(products) {
  const productsGridContainer = document.querySelector('.products-image-grid');
  const searchInput = document.querySelector('#search-input');
  const featuredCheckbox = document.querySelector('#featured-checkbox');
  const premiumCheckbox = document.querySelector('#premium-checkbox');
  const simpleCheckbox = document.querySelector('#simple-checkbox');
  const productsPerPageSelect = document.querySelector('#products-per-page');

  const featuredSelected = featuredCheckbox.checked;
  const premiumSelected = premiumCheckbox.checked;
  const simpleSelected = simpleCheckbox.checked;
  const perPageSelected = parseInt(productsPerPageSelect.value);

  productsGridContainer.innerHTML = '';

  products.slice(0, perPageSelected).forEach((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchInput.value.toLowerCase());
    const matchesFeatured = !featuredSelected || product.featured;
    const matchesPremium = !premiumSelected || product.premium;
    const matchesSimple = !simpleSelected || product.simple;

    if (matchesSearch && matchesFeatured && matchesPremium && matchesSimple) {
      const productElement = createProductElement(product);
      productsGridContainer.appendChild(productElement);
    }
  });
}

// Function to create a product element
function createProductElement(product) {
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

  // Replace "Add to cart" with "View the product" and update click functionality
  const viewProductButton = document.createElement('button');
  viewProductButton.classList.add('add-to-cart-button', 'js-add-to-cart');
  viewProductButton.dataset.productId = product.id;
  viewProductButton.textContent = 'View the product';

  viewProductButton.addEventListener('click', () => {
    // Redirect to single product info page after viewing
    const singleProductURL = `single-product.html?id=${product.id}`;
    window.location.href = singleProductURL;
  });

  productElement.appendChild(imageElement);
  productElement.appendChild(productNameElement);
  productElement.appendChild(productPriceElement);
  productElement.appendChild(productDescriptionElement);
  productElement.appendChild(viewProductButton);

  return productElement;
}

// Function to handle checkbox and search input changes
function handleFilterAndSearch() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  getProducts(baseUrl)
    .then((products) => {
      loader.style.display = 'none';
      filterAndDisplayProducts(products);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}

// Initial load and setup
handleFilterAndSearch();

// Add event listeners for changes in checkboxes and search input
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const searchInput = document.querySelector('#search-input');
const productsPerPageSelect = document.querySelector('#products-per-page');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', handleFilterAndSearch);
});

searchInput.addEventListener('input', handleFilterAndSearch);
productsPerPageSelect.addEventListener('change', handleFilterAndSearch);

// Render initial cart quantity
renderCartQuantity();

// // Import necessary functions from cart.js
// import { addToCart, renderCartQuantity, initializeCart } from './cart.js';

// // Call initializeCart to initialize the cart
// initializeCart();

// // Define your WooCommerce API URL with consumer_key and consumer_secret
// const consumerKey = 'ck_47853e2df96ba65807d856cfe84cc229618f2ba6';
// const consumerSecret = 'cs_d257f6fd840118c8fe85ac0545c5f535c1d73cb3';

// const baseUrl = `https://startwebsolution.com/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

// // Function to fetch products from WooCommerce API
// async function getProducts(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const products = await response.json();
//     return products;
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }
// }

// // Function to filter and display products
// function filterAndDisplayProducts(products) {
//   const productsGridContainer = document.querySelector('.products-image-grid');
//   const searchInput = document.querySelector('#search-input');
//   const featuredCheckbox = document.querySelector('#featured-checkbox');
//   const premiumCheckbox = document.querySelector('#premium-checkbox');
//   const simpleCheckbox = document.querySelector('#simple-checkbox');
//   const productsPerPageSelect = document.querySelector('#products-per-page');

//   const featuredSelected = featuredCheckbox.checked;
//   const premiumSelected = premiumCheckbox.checked;
//   const simpleSelected = simpleCheckbox.checked;
//   const perPageSelected = parseInt(productsPerPageSelect.value);

//   productsGridContainer.innerHTML = '';

//   products.slice(0, perPageSelected).forEach((product) => {
//     const matchesSearch = product.name.toLowerCase().includes(searchInput.value.toLowerCase());
//     const matchesFeatured = !featuredSelected || product.featured;
//     const matchesPremium = !premiumSelected || product.premium;
//     const matchesSimple = !simpleSelected || product.simple;

//     if (matchesSearch && matchesFeatured && matchesPremium && matchesSimple) {
//       const productElement = createProductElement(product);
//       productsGridContainer.appendChild(productElement);
//     }
//   });
// }

// // Function to create a product element
// function createProductElement(product) {
//   const productElement = document.createElement('div');
//   productElement.classList.add('product');

//   const imageElement = document.createElement('img');
//   imageElement.src = product.images[0].src;
//   imageElement.alt = product.name;

//   const productNameElement = document.createElement('h3');
//   productNameElement.textContent = product.name;

//   const productPriceElement = document.createElement('p');
//   productPriceElement.textContent = `Price: $${product.price}`;

//   const productDescriptionElement = document.createElement('p');
//   if (product.description) {
//     productDescriptionElement.innerHTML = product.description;
//   }

//   const addToCartGrid = document.createElement('div');
//   addToCartGrid.classList.add('add-to-cart-grid');

//   const addToCartButton = document.createElement('button');
//   addToCartButton.classList.add('add-to-cart-button', 'js-add-to-cart');
//   addToCartButton.dataset.productId = product.id;
//   addToCartButton.textContent = 'Add to cart';

//   addToCartButton.addEventListener('click', () => {
//     addToCart(product.id);
//     renderCartQuantity();
//     console.log('Button clicked:', product.id);
//   });

//   const addedToCartMessage = document.createElement('div');
//   addedToCartMessage.classList.add('added-to-cart-message');
//   addedToCartMessage.dataset.productId = product.id;
//   addedToCartMessage.textContent = ' ✔ Added to cart!';

//   addToCartGrid.appendChild(addToCartButton);
//   addToCartGrid.appendChild(addedToCartMessage);

//   productElement.appendChild(imageElement);
//   productElement.appendChild(productNameElement);
//   productElement.appendChild(productPriceElement);
//   productElement.appendChild(productDescriptionElement);
//   productElement.appendChild(addToCartGrid);

//   return productElement;
// }

// // Function to handle checkbox and search input changes
// function handleFilterAndSearch() {
//   const loader = document.querySelector('.loader');
//   loader.style.display = 'block';

//   getProducts(baseUrl)
//     .then((products) => {
//       loader.style.display = 'none';
//       filterAndDisplayProducts(products);
//     })
//     .catch((error) => {
//       console.error('Error fetching products:', error);
//     });
// }

// // Initial load and setup
// handleFilterAndSearch();

// // Add event listeners for changes in checkboxes and search input
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const searchInput = document.querySelector('#search-input');
// const productsPerPageSelect = document.querySelector('#products-per-page');

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', handleFilterAndSearch);
// });

// searchInput.addEventListener('input', handleFilterAndSearch);
// productsPerPageSelect.addEventListener('change', handleFilterAndSearch);

// // Render initial cart quantity
// renderCartQuantity();



// const baseUrl = 'https://startwebsolution.com/wp-json/wc/store/products?per_page=20&_embed';


// // Function to filter products based on checkboxes and search input
// function filterAndDisplayProducts(products) {
//     const productsGridContainer = document.querySelector('.products-image-grid');
//     const searchInput = document.querySelector('#search-input');
//     const featuredCheckbox = document.querySelector('#featured-checkbox');
//     const premiumCheckbox = document.querySelector('#premium-checkbox');
//     const simpleCheckbox = document.querySelector('#simple-checkbox');
//     const productsPerPageSelect = document.querySelector('#products-per-page');

//     // Get selected options from checkboxes and select element
//     const featuredSelected = featuredCheckbox.checked;
//     const premiumSelected = premiumCheckbox.checked;
//     const simpleSelected = simpleCheckbox.checked;
//     const perPageSelected = parseInt(productsPerPageSelect.value);

//     // Clear any existing content in the container
//     productsGridContainer.innerHTML = '';

//     // Filter and display products
//     products.slice(0, perPageSelected).forEach((product) => {
//         // Check if the product matches the filter criteria
//         const matchesSearch = product.name.toLowerCase().includes(searchInput.value.toLowerCase());
//         const matchesFeatured = !featuredSelected || product.featured;
//         const matchesPremium = !premiumSelected || product.premium;
//         const matchesSimple = !simpleSelected || product.simple;

//         if (matchesSearch && matchesFeatured && matchesPremium && matchesSimple) {
//             const productElement = document.createElement('div');
//             productElement.classList.add('product');

//             // Create an image element for the product's image
//             const imageElement = document.createElement('img');
//             imageElement.src = product.images[0].src; // Assuming the first image is used
//             imageElement.alt = product.name; // Set the alt text for accessibility

//             // Create other product information elements as needed
//             const productNameElement = document.createElement('h3');
//             productNameElement.textContent = product.name;

//             const productPriceElement = document.createElement('p');
//             productPriceElement.textContent = `Price: ${product.prices.price}`;

        

//             // Format the description based on your API response structure
//             const productDescriptionElement = document.createElement('p');
//             if (product.description) {
//                 productDescriptionElement.innerHTML = product.description;
//             }

//             // Append the image and other product information to the product element
//             productElement.appendChild(imageElement);
//             productElement.appendChild(productNameElement);
//             productElement.appendChild(productPriceElement);
//             productElement.appendChild(productDescriptionElement);

//             // Append the product element to the product grid container
//             productsGridContainer.appendChild(productElement);
//         }
//     });
// }

// // Function to handle checkbox and search input changes
// // Function to handle checkbox and search input changes
// function handleFilterAndSearch() {
//     // Show the loading spinner initially
//     const loader = document.querySelector('.loader');
//     loader.style.display = 'block';

//     // Fetch products and apply filtering/display
//     getProducts(baseUrl).then((products) => {
//         // Hide the loading spinner once the data is ready
//         loader.style.display = 'none';

//         filterAndDisplayProducts(products);

//         // Add event listeners for changes in checkboxes and search input
//         const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//         const searchInput = document.querySelector('#search-input');
//         const productsPerPageSelect = document.querySelector('#products-per-page');

//         checkboxes.forEach((checkbox) => {
//             checkbox.addEventListener('change', () => {
//                 filterAndDisplayProducts(products);
//             });
//         });

//         searchInput.addEventListener('input', () => {
//             filterAndDisplayProducts(products);
//         });

//         productsPerPageSelect.addEventListener('change', () => {
//             filterAndDisplayProducts(products);
//         });
//     });
// }

// // Function to fetch products
// async function getProducts(url) {
//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const products = await response.json();
//         return products;
//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// }

// // Initial load and setup
// handleFilterAndSearch();



// // 
// // Initialize an empty cart array to store selected products
// let cart = [];

// // Function to handle "Add to Cart" button clicks
// function handleAddToCartClick(event) {
//     if (event.target.classList.contains('add-to-cart-button')) {
//         const productId = event.target.getAttribute('data-product-id');
//         const productName = event.target.getAttribute('data-product-name');
//         const productPrice = parseFloat(event.target.getAttribute('data-product-price'));

//         // Check if the product is already in the cart
//         const existingProduct = cart.find((product) => product.id === productId);

//         if (existingProduct) {
//             // If the product is in the cart, update the quantity
//             existingProduct.quantity++;
//         } else {
//             // If the product is not in the cart, add it
//             cart.push({
//                 id: productId,
//                 name: productName,
//                 price: productPrice,
//                 quantity: 1,
//             });
//         }

//         // You can update the cart UI or save the cart to localStorage here
//         // For now, let's log the updated cart to the console
//         console.log('Updated Cart:', cart);
//     }
// }

// // Add an event listener to the product container to handle button clicks
// const productsGridContainer = document.querySelector('.products-image-grid');
// productsGridContainer.addEventListener('click', handleAddToCartClick);
