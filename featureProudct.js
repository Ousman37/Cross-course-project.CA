const base_url = "https://flowerpowersupply.com/wp-json/wc/v3/products";
const consumer_key = "ck_0f1f3f9c40c6762e40c77177fecf0f6b6caf19b8";
const consumer_secret = "cs_de202a977fa4057f494d4a1cc23659a6f73b8260";

fetch(
  `${base_url}/?consumer_key=${consumer_key}&&consumer_secret=${consumer_secret}&&featured=true`
)
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    result.map((eachPd) => {
      showFeatureProduct(eachPd);
    });
  });

const showFeatureProduct = async (data) => {
  const new_div = document.createElement("div");
  const pdTemplate = `
    <a href="/product.html?id=${data?.id}">Product id:${data?.id} </a>
    <p>product name :${data?.name}</p>
   `;
  new_div.innerHTML = pdTemplate;
  const featurePdList = document.getElementById("featureProducts");
  featurePdList.appendChild(new_div);
};
