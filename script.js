/*
let myDishes = [
  { name: "Pizza Krabben", price: 9.50, description: "Pizza mit leckeren Meeresfrüchten...", amount: 0 },
  { name: "Pizza Margherita", price: 5.90, description: "Pizza mit Tomaten und Käse", amount: 0 },
  { name: "Nudelauflauf", price: 10.20, description: "Nudeln mit Käse und Schinken", amount: 0 },
  { name: "Tuna Nudeln", price: 8.70, description: "Spirelli mit Tunfisch", amount: 0 },
  { name: "Tofu", price: 6.50, description: "Nudeln mit Tofu", amount: 0 },
  { name: "Spinatnudeln", price: 11.90, description: "Mit Spinat und Gemüse", amount: 0 }
];

function increaseAmount(index) {
  myDishes[index].amount++;
  updateCart();
}

function decreaseAmount(index) {
  if (myDishes[index].amount > 0) {
    myDishes[index].amount--;
    updateCart();
  }
}

function updateCart() {
  const cart = document.querySelector('.cart');
  let total = 0;
  const cartItems = document.createElement('div');
  cartItems.innerHTML = '<h2>Warenkorb</h2><hr>';

  myDishes.forEach((dish, index) => {
    if (dish.amount > 0) {
      total += dish.price * dish.amount;
      cartItems.innerHTML += `
        <div class="cart-item">
          <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
            <button onclick="decreaseAmount(${index})">-</button>
            <span>${dish.amount}</span>
            <button onclick="increaseAmount(${index})">+</button>
            <button onclick="remove" class="remove" data-index="${index}" style="margin-left: 10px;">🗑️</button>
          </div>
          <span>${dish.name}</span>
          <span>${(dish.price * dish.amount).toFixed(2)}€</span>
        </div>
      `;
    }
  });

  cartItems.innerHTML += `<hr><strong>Gesamt: ${total.toFixed(2)}€</strong> <div class="order-section" style="text-align: center; margin-top: 20px;">
  <button onclick="placeOrder()" id="orderButton" style="padding: 10px 20px; font-size: 1rem;">Jetzt Bestellen</button>`;
  cart.innerHTML = '';
  cart.appendChild(cartItems);

  const originalCart = document.querySelector('.cart');
  const cartClone = document.getElementById('cartContentClone');
  cartClone.innerHTML = originalCart.innerHTML;
}





function openCartOverlay() {
  document.getElementById('cartOverlay').style.display = 'flex';
  const originalCart = document.querySelector('.cart');
  const cartClone = document.getElementById('cartContentClone');
  cartClone.innerHTML = originalCart.innerHTML;
}

function closeCartOverlay() {
  document.getElementById('cartOverlay').style.display = 'none';
}


function placeOrder() {
  const hasItems = myDishes.some(dish => dish.amount > 0);
  const errorElement = document.getElementById("orderError");

  if (hasItems) {
    myDishes.forEach(dish => dish.amount = 0);
    updateCart();
    errorElement.style.display = "none";
  } else {
    errorElement.style.display = "block";
  }
}






-------------------------------------

*/



let myDishes = [
  { name: "Pizza Krabben", price: 9.50, description: "Pizza mit leckeren Meeresfrüchten...", amount: 0 },
  { name: "Pizza Margherita", price: 5.90, description: "Pizza mit Tomaten und Käse", amount: 0 },
  { name: "Nudelauflauf", price: 10.20, description: "Nudeln mit Käse und Schinken", amount: 0 },
  { name: "Tuna Nudeln", price: 8.70, description: "Spirelli mit Tunfisch", amount: 0 },
  { name: "Tofu", price: 6.50, description: "Nudeln mit Tofu", amount: 0 },
  { name: "Spinatnudeln", price: 11.90, description: "Mit Spinat und Gemüse", amount: 0 }
];

function increaseAmount(index) {
  myDishes[index].amount++;
  updateCart();
}

function decreaseAmount(index) {
  if (myDishes[index].amount > 0) {
    myDishes[index].amount--;
    updateCart();
  }
}

function updateCart() {
  const cart = document.querySelector('.cart');
  let total = 0;
  const cartItems = document.createElement('div');
  cartItems.innerHTML = '<h2>Warenkorb</h2><hr>';

  myDishes.forEach((dish, index) => {
    if (dish.amount > 0) {
      total += dish.price * dish.amount;
      cartItems.innerHTML += `
      
        <div class="cart-name">
          <h3>${dish.name}</h3>
          </div>
          <div class="cart-buttons">
          <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
            <button onclick="decreaseAmount(${index})">-</button>
            <span>${dish.amount}</span>
            <button onclick="increaseAmount(${index})">+</button>
            <button onclick="removeItem(${index})">Entfernen</button>
          </div>
          <span>${(dish.price * dish.amount).toFixed(2)}€</span>
        </div>
        
        
      `;
    }
  });

  cartItems.innerHTML += `<hr><strong>Gesamt: ${total.toFixed(2)}€</strong> <div class="order-section" style="text-align: center; margin-top: 20px;">
  <button onclick="placeOrder()" id="orderButton" style="padding: 10px 20px; font-size: 1rem;">Jetzt Bestellen</button>`;
  cart.innerHTML = '';
  cart.appendChild(cartItems);

  const originalCart = document.querySelector('.cart');
  const cartClone = document.getElementById('cartContentClone');
  cartClone.innerHTML = originalCart.innerHTML;
}





function openCartOverlay() {
  document.getElementById('cartOverlay').style.display = 'flex';
  const originalCart = document.querySelector('.cart');
  const cartClone = document.getElementById('cartContentClone');
  cartClone.innerHTML = originalCart.innerHTML;
}

function closeCartOverlay() {
  document.getElementById('cartOverlay').style.display = 'none';
}


function removeItem(index) {
  myDishes[index].amount = 0;
  updateCart();
}


function placeOrder() {
  const hasItems = myDishes.some(dish => dish.amount > 0);
  const errorElement = document.getElementById("orderError");

  if (hasItems) {
    myDishes.forEach(dish => dish.amount = 0);
    updateCart();
    errorElement.style.display = "none";
  } else {
    errorElement.style.display = "block";
  }
}

