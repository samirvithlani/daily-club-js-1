document.addEventListener("DOMContentLoaded", async () => {
  // const products = [
  //     {
  //         id:1,
  //         title:"abc",
  //         price:100,
  //         category:"Beauty"
  //     }
  // ]

  const res = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });
  var data = await res.json();
  console.log(data);

  document.getElementById("sorting").addEventListener("click",()=>{

    const sortedProduct = data.products.sort((a,b)=>a.price-b.price)
    const tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    renderData(sortedProduct)
    console.log(sortedProduct)
  })



  const renderData = (products)=>{
    
    products.forEach((product) => {
        createRow(product);
      });
  }

  renderData(data.products)


//   data.products.forEach((product) => {
//     createRow(product);
//   });
});

const createRow = (product) => {
  const tbody = document.getElementById("tbody");
  const tr = document.createElement("tr");

  const idTd = document.createElement("td");
  idTd.innerHTML = product.id;

  const titleTd = document.createElement("td");
  titleTd.innerHTML = product.title;

  const priceTd = document.createElement("td");
  priceTd.innerHTML = product.price;

  const categoryTd = document.createElement("td");
  categoryTd.innerHTML = product.category;

  const tagsTd = document.createElement("td");
  tagsTd.innerHTML = product.tags;

  const imageTd = document.createElement("td");
  const img = document.createElement("img");
  img.style.height = "70px";
  img.style.width = "70px";

  img.src = product.thumbnail;
  imageTd.appendChild(img);

  tr.appendChild(idTd);
  tr.appendChild(titleTd);
  tr.appendChild(priceTd);
  tr.appendChild(categoryTd);
  tr.appendChild(tagsTd);
  tr.appendChild(imageTd);

  tbody.appendChild(tr);
};
