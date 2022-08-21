// Global 1 variables

class CartItem {
  constructor(name, desc, img, price) {
    this.name = name;
    this.desc = desc;
    this.img = img;
    this.price = price;
    this.quantity = 1;
  }
}

class LocalCart {
  static key = "cartItems";

  static getLocalCartItems() {
    let cartMap = new Map();
    const cart = localStorage.getItem(LocalCart.key);
    if (cart === null || cart.length === 0) return cartMap;
    //Convert to [] []
    return new Map(Object.entries(JSON.parse(cart)));
  }

  static addItemToLocalCart(id, item) {
    let cart = LocalCart.getLocalCartItems();
    if (cart.has(id)) {
      let mapItem = cart.get(id);
      mapItem.quantity += 1;
      cart.set(id, mapItem);
    } else {
      cart.set(id, item);
      localStorage.setItem(
        LocalCart.key,
        JSON.stringify(Object.fromEntries(cart))
      );
      updateCartUI();
    }
  }
  static removeItemFromCart(id) {
    let cart = LocalCart.getLocalCartItems();
    if (cart.has(id)) {
      let mapItem = cart.get(id);
      if (mapItem.quantity > 1) {
        mapItem.quantity -= 1;
        cart.set(id, mapItem);
      } else {
        cart.delete(id);
      }
      if (cart.length === 0) localStorage.clear();
      else {
        localStorage.setItem(
          LocalCart.key,
          JSON.stringify(Object.fromEntries(cart))
        );

        updateCartUI();
      }
    }
  }
}

const menuToggle = document.getElementById("menu-toggle-icon");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

console.log(menuToggle);

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Global 2  variables

const cartIcon = document.querySelector(".fa-cart-shopping");
const fullCartWindow = document.querySelector(".full-cart-window");
fullCartWindow.inWindow = 0;
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", addItemFunction);
});

// Initialize Cart
function initializeCart() {
  updateCartUI();
}

initializeCart();

// add to cart

function addItemFunction(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.getAttribute("data-id");
  const img = e.target.parentElement.parentElement.previousElementSibling.src;
  const name = e.target.parentElement.previousElementSibling.textContent;
  const desc = e.target.parentElement.children[0].textContent;
  const price = parseFloat(
    e.target.parentElement.children[1].textContent.replace("Price: $", ``)
  );
  const item = new CartItem(name, desc, img, price);
  LocalCart.addItemToLocalCart(id, item);
  console.log(price);
}

// shopping cart mouseover
cartIcon.addEventListener("mouseover", () => {
  if (fullCartWindow.classList.contains("hidden"))
    fullCartWindow.classList.remove("hidden");
});
// shopping cart mouseleave
cartIcon.addEventListener("mouseleave", () => {
  //if (fullCartWindow.classList.contains("hidden"))
  setTimeout(() => {
    if (fullCartWindow.inWindow === 0) {
      fullCartWindow.classList.add("hidden");
    }
  }, 500);
});

fullCartWindow.addEventListener("mouseover", () => {
  fullCartWindow.inWindow = 1;
});

fullCartWindow.addEventListener("mouseleave", () => {
  fullCartWindow.inWindow = 0;
  fullCartWindow.classList.add("hidden");
});

function updateCartUI() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  cartWrapper.innerHTML = "";
  let count = 0;
  const items = LocalCart.getLocalCartItems("cartItems");
  if (items === null) return;
  let total = 0;
  for (const [key, value] of items.entries()) {
    const cartItem = document.createElement(`div`);
    cartItem.classList.add("cart-item");
    let price = value.price * value.quantity;
    price = Math.round((price * 100) / 100);
    count += 1;
    total += price;

    cartItem.innerHTML = `
                            <img src="${value.img}">
                            <div class="details">
                             <h3>${value.name}</h3>
                             <p>${value.desc}
                             
                              <span class="quantity">Quantity: ${value.quantity}</span>
                             <span class="price">Price: $${price}</span>
                             </p>
                             </div>
                              <div class="cancel"><i class="fa-solid fa-rectangle-xmark"></i></div>`;

    cartItem.lastElementChild.addEventListener("click", () => {
      LocalCart.removeItemFromCart(key);
    });
    cartWrapper.append(cartItem);
  }
  // should be: count >0
  if (count > 0) {
    cartIcon.classList.add("non-empty");
    let root = document.querySelector(":root");
    console.log(count);
    root.style.setProperty("--after-content", `"${count}"`);
    const subtotal = document.querySelector(".subtotal");
    subtotal.innerHTML = `SubTotal: $${total}`;
  } else {
    cartIcon.classList.remove("non-empty");
  }
  document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
  });
}
