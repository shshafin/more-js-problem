const shoppingCart = [
  { name: "shirt", price: 1600 },
  { name: "pant", price: 2200 },
  { name: "shoe", price: 750 },
];

function totalProductSum(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
}

const totalPrice = totalProductSum(shoppingCart);
console.log(totalPrice);
