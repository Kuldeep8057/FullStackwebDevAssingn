const items = [
  {
    name: "apple earbuds",
    category: "Laptops",
    priceUSD: 199,
  },
  {
      name: "Iphone 15",
      category: "Mobile",
      priceUSD: 1490,
  },
  {
      name: "Apple Watch",
      category: "Watches",
      priceUSD: 499,
  },
];

const currencyExchangeValue = 80;

function convertToINR(priceUSD){
  return priceUSD * currencyExchangeValue;
}
const itemInIND = items.map((item) => ({
  ...item,priceIND : convertToINR(item.priceUSD)
}))
  console.log(itemInIND);

  