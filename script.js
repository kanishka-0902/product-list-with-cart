const productGrid = document.getElementById("product-grid");

fetch("./data.json")
    .then(response => response.json())
    .then(products => {
        console.log(products);
    });