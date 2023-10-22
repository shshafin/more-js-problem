const phoneName = [
  {
    name: "samsung",
    camera: "12MP",
    storage: "30GB",
    price: 68000,
    wearenty: "3 years",
  },
  {
    name: "iphone",
    camera: "12MP",
    storage: "30GB",
    price: 88000,
    wearenty: "3 years",
  },
  {
    name: "vivo",
    camera: "12MP",
    storage: "30GB",
    price: 26000,
    wearenty: "3 years",
  },
  {
    name: "one plus",
    camera: "12MP",
    storage: "30GB",
    price: 32000,
    wearenty: "3 years",
  },
  {
    name: "oppo",
    camera: "12MP",
    storage: "30GB",
    price: 22000,
    wearenty: "3 years",
  },
  {
    name: "xhaomi",
    camera: "12MP",
    storage: "30GB",
    price: 27000,
    wearenty: "3 years",
  },
  {
    name: "nokia",
    camera: "12MP",
    storage: "30GB",
    price: 61000,
    wearenty: "3 years",
  },
  {
    name: "huwai",
    camera: "12MP",
    storage: "30GB",
    price: 43000,
    wearenty: "3 years",
  },
  {
    name: "asus",
    camera: "12MP",
    storage: "30GB",
    price: 56000,
    wearenty: "3 years",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];

  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.name.length < cheapest.name.length) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const getPhone = cheapestPhone(phoneName);
console.log(getPhone);
