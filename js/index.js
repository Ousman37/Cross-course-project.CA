window.onload = function () {
  // Cart box

  //alert("javascript is working ");

  //console.log("javascript is working ");

  const iconShopping = document.querySelector(".fa-cart-shopping");
  const buttonClose = document.querySelector("i.fa-close");
  const cartBok = document.getElementById("cartBok");

  iconShopping.addEventListener("click", function () {
    //console.log("shopping carts is clicked");
    cartBok.classList.add("active");
  });

  buttonClose.addEventListener("click", function () {
    //console.log("shopping carts is clicked");
    cartBok.classList.remove("active");
  });

  //  Adding data to Local Storage
  const addToCartBtn = document.getElementsByClassName("addToCart");
  //let number = JSON.getItem()
  let items = [];
  console.log(addToCartBtn);
  for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", function (e) {
      console.log(e.target.parentElement.children[1].children[0].textContent);
      if (typeof Storage !== "undefined") {
        let item = {
          id: i + 1,
          name: e.target.parentElement.children[0].textContent,
          price: e.target.parentElement.children[1].children[0].textContent,
          number: 1,
        };
        if (JSON.parse(localStorage.getItem("items")) === null) {
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
        } else {
          //alert("item is present");
          const localItems = JSON.parse(localStorage.getItem("items"));
          localItems.map((data) => {
            if (item.id == data.id) {
              item.number = data.number + 1;
            } else {
              items.push(data);
            }
          });
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
          window.location.reload();
        }
      } else {
        alert("local storage is not working on your browser!");
      }
    });
  }
  // adding the data to the shopping cart

  const iconShoppingP = document.querySelector(".iconShopping p");
  let number = 0;
  JSON.parse(localStorage.getItem("items")).map((data) => {
    number = number + data.number;
  });
  iconShoppingP.innerHTML = number;

  // here  adding  cartBok data in the table
  const cartBokTable = cartBok.querySelector("table");
  //console.log(cartBokTable);
  let tableData = "";
  tableData += `<tr> <th>S no</th> <th>Item Name</th><th>Item No</th><th>Item Price</th><th></th></tr>`;

  if (JSON.parse(localStorage.getItem("items")) === null) {
    tableData += `<tr> <td colspan="5">No items Found</td></tr>`;
  } else {
    JSON.parse(localStorage.getItem("items")).map((data) => {
      tableData +=
        `<tr> <th>` +
        data.id +
        `</th><th>` +
        data.name +
        `</th><th>` +
        data.no +
        `</th><th>` +
        data.price +
        `</th><th><a href="#">Delete</a></th></tr>`;
    });
  }
  cartBokTable.innerHTML = tableData;
};
