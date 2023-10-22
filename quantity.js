const shoppingCart = [
  { name: "shirt", price: 1600, quantity: 5 },
  { name: "pant", price: 2200, quantity: 4 },
  { name: "shoe", price: 750, quantity: 2 },
];

function totalProductSum(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price * product.quantity;
  }
  return sum;
}

const totalPrice = totalProductSum(shoppingCart);
console.log(totalPrice);
