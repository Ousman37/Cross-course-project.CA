let cart = [];

export function initializeCart() {
  // Load the cart from localStorage
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  cart = storedCart || [];
  renderCartQuantity();
}

export function addToCart(productId) {
  let matchingItem = cart.find((cartItem) => cartItem.productId === productId);
  
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter((cartItem) => cartItem.productId !== productId);
  saveToStorage();
  renderCartQuantity();

  // Check if the cart is empty and set checkout quantity to zero
  if (cart.length === 0) {
    const checkoutQuantityElement = document.querySelector('.js-cart-quantity');
    checkoutQuantityElement.textContent = 'Checkout (0)';
  }
}

export function renderCartQuantity() {
  let cartQuantity = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  document.querySelector('.js-cart-quantity').textContent = `Checkout (${cartQuantity})`;
}

function saveToStorage() {
  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

initializeCart();

export default cart; // Export 'cart' as the default export
// // cart.js
// let cart = [];

// export function initializeCart() {
//   const storedCart = JSON.parse(localStorage.getItem('cart'));
//   cart = storedCart || [];
//   renderCartQuantity();
// }

// export function addToCart(productId) {
//   let matchingItem = cart.find((cartItem) => cartItem.productId === productId);
  
//   if (matchingItem) {
//     matchingItem.quantity += 1;
//   } else {
//     cart.push({
//       productId: productId,
//       quantity: 1,
//     });
//   }

//   saveToStorage();
// }

// export function removeFromCart(productId) {
//   cart = cart.filter((cartItem) => cartItem.productId !== productId);
//   saveToStorage();
//   renderCartQuantity();

//   // Check if the cart is empty and set checkout quantity to zero
//   if (cart.length === 0) {
//     const checkoutQuantityElement = document.querySelector('.js-cart-quantity');
//     checkoutQuantityElement.textContent = 'Checkout (0)';
//   }
// }

// export function renderCartQuantity() {
//   let cartQuantity = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
//   document.querySelector('.js-cart-quantity').textContent = `Checkout (${cartQuantity})`;
// }

// function saveToStorage() {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// initializeCart();

// export default cart; // Export 'cart' as the default export
