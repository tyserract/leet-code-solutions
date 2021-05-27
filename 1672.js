var maximumWealth = function (accounts) {
  let tempArray = [];
  accounts.forEach((v, i, a) => {
    tempArray.push(v.reduce((a, b) => a + b));
  })
  return Math.max(...tempArray);
};
