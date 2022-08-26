const base_url = "https://flowerpowersupply.com/wp-json/wc/v3/products";
const consumer_key = "ck_0f1f3f9c40c6762e40c77177fecf0f6b6caf19b8";
const consumer_secret = "cs_de202a977fa4057f494d4a1cc23659a6f73b8260";

const id = new URLSearchParams(location.search).get("id");

const loading_div = document.createElement("div");
const loadingTemplate = `
<div class="" >loading.....</div>
`;

const featurePdList = document.getElementById("loading");
loading_div.innerHTML = loadingTemplate;
featurePdList.appendChild(loading_div);

if (id) {
  fetch(
    `${base_url}/${id}/?consumer_key=${consumer_key}&&consumer_secret=${consumer_secret}`
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      showFeatureProduct(result);
    });

  const showFeatureProduct = async (data) => {
    const new_div = document.createElement("div");
    const pdTemplate = `
    <p>Product id:${data?.id} </p>
    <p>Product name :${data?.name}</p>
    <p>Price  :${data?.price}</p>
    <img  src=${data?.images[0].src} />
   `;
    new_div.innerHTML = pdTemplate;

    document.getElementById("loading").innerHTML = "";
    featurePdList.appendChild(new_div);
  };
} else {
  location.replace("/index.html");
}
