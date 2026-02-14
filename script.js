// --- 1. Data Mock ---
const menuData = [
{
id: 1,
name: "Big Mac",
price: 5.99,
category: "Burgers",
image: "https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off&quot;",
desc: "Mouthwatering perfection. Two 100% beef patties."
},
{
id: 2,
name: "Quarter Pounder",
price: 6.39,
category: "Burgers",
image: "https://s7d1.scene7.com/is/image/mcdonalds/Header_QuarterPounderwithCheese_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off&quot;",
desc: "100% fresh beef, hot, deliciously juicy."
},
{
id: 3,
name: "World Famous Fries",
price: 2.99,
category: "Sides",
image: "https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumFrenchFries_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off&quot;",
desc: "Golden on the outside, soft and fluffy on the inside."
},
{
id: 4,
name: "Chicken McNuggets",
price: 4.49,
category: "Chicken",
image: "https://s7d1.scene7.com/is/image/mcdonalds/Header_10pcChickenMcNuggets_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off&quot;",
desc: "Tender, juicy chicken breast meat in a tempura coating."
},
{
id: 5,
name: "Coca-Cola",
price: 1.99,
category: "Drinks",
image: "https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumCoke_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off&quot;",
desc: "A cold, refreshing Coca-Cola®️ soda."
},
{
id: 6,
name: "Oreo McFlurry",
price: 3.29,
category: "Desserts",
image: "https://s7d1.scene7.com/is/image/mcdonalds/Header_OreoMcFlurry_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off&quot;",
desc: "Creamy vanilla soft serve with crunchy OREO®️ pieces."
}
];

// --- 2. State Management ---
let cart = [];
const menuArea = document.getElementById('menu-area');
const cartOverlay = document.getElementById('cart-overlay');
const cartCountEl = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const toast = document.getElementById('toast');

// --- 3. Async/Await Operations ---

// Simulate fetching data from a server
async function fetchMenu() {
// Show Loader
menuArea.innerHTML = `
<div class="loader">
<div class="spinner"></div>
<p>Loading your favorites...</p>
</div>
`;
try{
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(menuData);
        }, 1500);
        });
        renderMenu(data);
    }catch (error){
        menuArea.innerHTML = `<p style="text-align:center; color:red">Failed to load</p>`
    }
}
function toggleCart(){
    cartOverlay.classList.toggle("open");
}

fetchMenu();

function renderMenu(items){
    menuArea.innerHTML = ``;

    const grid = document.createElement(`div`);
    grid.className = `food-grid`;
    items.forEach((item, index)=> {
        const delay = index * 100;

        const card = document.createElement(`div`);
        card.className = `food-card`;
        card.style.animationDelay = `${delay}ms`;

        card.innerHTML = `
        <div class="food-img-container">
        <img src="${item.image}" alt="${item.name}" class ="food-img">
        </div>
        <div class="food-info">
            <div class="food-name">${item.name}</div>
            <div class="food-desc">${item.desc}</div>
            <div class="food-footer">
                <div class="food-price">${item.price}</div>
                <button class="add-btn" onclick="addToCart(${item.id})">Add to Order </button>
            </div>
        </div>
        `;
        grid.appendChild(card);
    });

    const title = document.createElement(`h3`);
    title.className = `category-title`;
    title.innerText = `All Favorites`;

    menuArea.appendChild(title);
    menuArea.appendChild(grid);
}

function renderCart(){
    cartItemsContainer.innerHTML = '';
    checkoutBtn.disabled = false;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className ='cart-items'
    })
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);

    if(items){
        cart.push(item);
        updateCartUI();

        showNOtification (Added $)
    }
}