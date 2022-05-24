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

  // Local Storage  check the

  if (typeof Storage !== "undefined") {
    //const array = ["a", "b", "c", "d"];
    //const object = [
    //  {
    //    name: "Ousman Didi",
    //    channelName: "fullyworld web",
    //    address: {
    //      hosueNo: "0259",
    //    },
    //  },
    //  {
    //    name: "Amat  foo",
    //    channelName: "fullyworld web",
    //    address: {
    //      hosueNo: "0259",
    //    },
    //  },
    //];
    //localStorage.setItem("localStorageinfo", JSON.stringify(object));
    ////console.log("our storage is working");
    //localStorage.setItem("localStorageinfo", array);
    //localStorage.setItem("localStorageinfo", 37);
    //// get data from local storage

    //const data = localStorage.getItem("localStorageinfo");
    //console.log(JSON.parse(data)[0].channelName);

    //console.log(data[2]);
    //console.log(data);
    localStorage.removeItem(localStorageinfo);
  } else {
    console.log("local storage is not working on your browser!");
  }
};
