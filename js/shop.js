// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

//PROVES

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  let prodLength = products.length;
  for (let i = 0; i < prodLength; i++) {
    if (id === products[i].id) {
      cartList.push(products[i]);
      console.log(cartList);
    }
  }
}

// Exercise 2
// buidem el carret amb splice. A partir de la posició 0 i per a tota la length, no afegim res.
function cleanCart(cartList) {
  cartList.splice(0, cartList.length);
  console.log(cartList);
  // funciona al console log però no es buida el carret
}

// Exercise 3
function calculateTotal(cartList) {
  // Calculate total price of the cart using the "cartList" array
  for (i = 0; i < cartList.length; i++) {
    total += products[i].price;
  }
  console.log(total);
}

// Exercise 4
function generateCart(cartList) {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  for (i = 0; i < cartList.length; i++) {

    let getID = cartList[i].id;
    let cartProduct = cart.find((p) => getID === p.id);

    if (cartProduct == undefined) {
      cartList[i].quantity = 1;
      cart.push(cartList[i]);

    } else {
      cartProduct.quantity += 1;  // !!! ME SUMA TAMBIÉN EN EL CARTLIST, como si fuera el mismo objeto
    }
  }
  console.log(cartList);
  console.log(cart);
  applyPromotionsCart(cart);
}


// Exercise 5 // 
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"
  for (i = 0; i < cart.length; i++) {

    let quantity = cart[i].quantity;
    let price = cart[i].price;

  switch (cart[i].id) {

    case 1:

      if (cart[i].quantity >= 3) {
        var DISCOUNT_PRICE= 10;
        cart[i].subtotal = quantity * price;
        cart[i].subtotalWithDiscount = (DISCOUNT_PRICE * quantity).toFixed(2); 
      } else {
        cart[i].subtotal = quantity * price;
        cart[i].subtotalWithDiscount = cart[i].subtotal;
      }

      case 3:

        if (cart[i].quantity >= 10) {
          var DISCOUNT_CAKE = 2/3;
          cart[i].subtotal = quantity * price;
          let cakePriceDiscount = cart[i].price * DISCOUNT_CAKE;
          cart[i].subtotalWithDiscount = (quantity * cakePriceDiscount).toFixed(2);
        } else {
          cart[i].subtotal = quantity * price;
          cart[i].subtotalWithDiscount = cart[i].subtotal;
        }

        case 2,4,5,6,7,8,9:

          cart[i].subtotal = quantity * price;
          cart[i].subtotalWithDiscount = cart[i].subtotal;
        }
  }
  console.log(cart);

}

// Exercise 6
function printCart(cart) {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let DOMcart = document.getElementById("cart_list");
  let cartModal = document.getElementById("cartModal");

  for (i=0; i < cart.length; i++) {
    DOMcart.querySelector('th').textContent = cart[i].name;
    DOMcart.querySelectorAll('td')[0].textContent = cart[i].price;
    DOMcart.querySelectorAll('td')[1].textContent = cart[i].quantity;
    DOMcart.querySelectorAll('td')[2].textContent = cart[i].subtotalWithDiscount;

//!!!!!!!!!! TO DO - CLONE

}
}

// ** Nivell II **

// Exercise 8
function addToCart(id) { // TO DO: provar si funciona 
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      cartList.push(products[i]);
      generateCart(cartList);
      console.log(cart);
      applyPromotionsCart(cart);
    }
    }
  }

  // Exercise 9
  function removeFromCart(id) {// 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < cart.length; i++) {
      if (id === cart[i].id) {
        if (cart[i].quantity > 1) {
          cart[i].quantity -= 1;
          applyPromotionsCart(cart);
        } else if (cart[i].quantity === 1) {
          cart.splice(i-1, 1);
        }
      }
  }
}

  function open_modal() {
    console.log("Open Modal");
    printCart(cart);
  }
