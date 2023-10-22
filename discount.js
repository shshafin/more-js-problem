// if ticket number is less than 100 , ticket price: 100tk
// if ticket number is more than 100 but less than 200 , first 100 ticket price: 100tk & more than 100 ticket price: 90tk
// if ticket number is more than 200 ,
/* 
100 ---> 100tk
101 - 200 ---> 90tk
200+ ---> 70tk
*/

function ticketPriceCalculation(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketNumber = ticketQuantity - 100;
    const restTicketPrice = restTicketNumber * second100Rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketsPrice = restTicketQuantity * restTicketRate;
    const totalTicketPrice = first100Price + second100Price + restTicketsPrice;
    return totalTicketPrice;
  }
}

const ticketRate = ticketPriceCalculation(350);
console.log(ticketRate);
