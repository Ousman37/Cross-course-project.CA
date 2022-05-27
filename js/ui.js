var changeImage = document.getElementById("product-details");
var smallImage = document.getElementsByClassName(".small-image");

function changeImage() {
  let displayImage = document.getElementById("product-details");
  if (displayImage.src.match("product-details"));
  {
    displayImage.src = smallImage;
  }
  {
    displayImage.src = "smallImage";
  }
}

changeImage();

//console.log(productDetails);
//smallImage[0].onclick = function () {
//  productDetails.src = smallImage[0].src;
//};
//
//smallImage[1].onclick = function () {
//  productDetails.src = smallImage[1].src;
//};
//smallImage[2].onclick = function () {
//  productDetails.src = smallImage[2].src;
//};
//smallImage[3].onclick = function () {
//  productDetails.src = smallImage[3].src;
//};
//
