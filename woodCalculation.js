function woodCalculation(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const totalWood = woodCalculation(6, 1, 3);
console.log(totalWood);
