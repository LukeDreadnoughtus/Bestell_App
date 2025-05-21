
let myDishes = [
  {
    name: "Pizza Krabben",
    price: 9.50,
    description: "Pizza mit leckeren Meeresfrüchten (hauptsächlich Krabben) mit leckerer hausgemachter Sauce",
    amount: 0
  },
  {
    name: "Pizza Margherita",
    price: 5.90,
    description: "Pizza mit Tomaten und leckerem Mozarella Käse und Hirtenkäse",
    amount: 0
  },
  {
    name: "Nudelauflauf",
    price: 10.20,
    description: "feinster Nudeln mit verschiedenen Käsessorten und Schinken",
    amount: 0
  },
    {
    name: "Tuna Nudeln",
    price: 8.70,
    description: "Spirelli mit Tunfisch und Sonnenblumenöl",
    amount: 0
  },
    {
    name: "Tofu",
    price: 6.50,
    description: "Weizen Nudeln mit Tofu und Beilagen",
    amount: 0
  },
    {
    name: "Spinatnudeln",
    price: 11.90,
    description: "Spinatnudeln mit cremiger Soße, Spinat und Gemüse",
    amount: 0
  },


  
];

document.addEventListener('DOMContentLoaded', function () {
  const plusButtons = document.querySelectorAll('.plus');
  const cart = document.querySelector('.cart');

  plusButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      const dish = myDishes[index];
      dish.amount++;
      updateCart();
    });
  });

  function updateCart() {
    let total = 0;
    const cartItems = document.createElement('div');
    cartItems.innerHTML = '<h2>Warenkorb</h2><hr>';

    myDishes.forEach((dish, index) => {
      if (dish.amount > 0) {
        total += dish.price * dish.amount;
        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
          <span>${dish.name}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="decrease" data-index="${index}">-</button>
            <span>${dish.amount}</span>
            <button class="increase" data-index="${index}">+</button>
            </div>
            <div
            <span>${(dish.price * dish.amount).toFixed(2)}€</span>
            <button class="remove" data-index="${index}" style="margin-left: 10px;">🗑️</button>
          </div>
        `;
        cartItems.appendChild(item);
      }
    });

    cartItems.innerHTML += '<hr>';
    const totalDiv = document.createElement('div');
    totalDiv.className = 'cart-item total';
    totalDiv.innerHTML = `
      <span>Gesamt</span>
      <span>${total.toFixed(2)}€</span>
    `;
    cartItems.appendChild(totalDiv);

    cart.innerHTML = '';
    cart.appendChild(cartItems);

    // Funktionalitäten binden
    document.querySelectorAll('.remove').forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        myDishes[index].amount = 0;
        updateCart();
      });
    });

    document.querySelectorAll('.increase').forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        myDishes[index].amount++;
        updateCart();
      });
    });

    document.querySelectorAll('.decrease').forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        if (myDishes[index].amount > 1) {
          myDishes[index].amount--;
          updateCart();
        }
      });
    });
  }
});
