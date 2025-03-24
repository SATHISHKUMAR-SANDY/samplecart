let fruits = [
    { 
        id: "apple-btn",
        name: "Apple",
        price: 200,
        Description: "Apple good for our body",
        url: "apple-2788616_1280.jpg"
    }
];

let mainSection = document.getElementById("CartMain");
let nav = document.getElementById("nav");


mainSection.innerHTML = fruits.map(i => `
    <img src="${i.url}">
    <h1>Name: ${i.name}</h1>
    <h5>Price: ${i.price}</h5>
    <p>${i.Description}</p>
    <button id="cart-btn">Add to Cart</button>
`).join("");

nav.innerHTML = `
    <i class="fa-solid fa-cart-shopping"></i>
    <p id="count">0</p>
`;


let countValue = document.getElementById("count");
let cardButton = document.getElementById("cart-btn");



let cartCount = 0;

cardButton.addEventListener("click", () => {
    cartCount++; // Increase the count
    countValue.innerText = cartCount; // Update UI
});
