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

            // Create a new element for the product price
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
            productElement.appendChild(productPriceElement); // Append the price element
            productElement.appendChild(productDescriptionElement);
            productElement.appendChild(actionButton);

            productsGridContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error filtering and displaying products:', error);
    }
}
