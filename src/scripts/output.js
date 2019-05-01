//select location of output
const outElProfit = document.querySelector("#profit");
const outElMonth = document.querySelector("#month");
const outElSalesSold = document.querySelector("#salesSold");
const outElSalesProfit = document.querySelector("#salesProfit");
const outElModel = document.querySelector("#model");
const outElBank = document.querySelector("#bank");

//add a heading that does not change
outElProfit.innerHTML = `<h1>Total Profit 2017</h1>`;
outElMonth.innerHTML = `<h1>Month with Highest Car Sells</h1>`;
outElSalesSold.innerHTML = `<h1>Most Cars Sold by Salesperson</h1>`;
outElSalesProfit.innerHTML = `<h1>Salesperson Who Made the Most Profit</h1>`;
outElModel.innerHTML = `<h1>Most Popular Model</h1>`;
outElBank.innerHTML = `<h1>Bank with the Most Loans to Customers</h1>`;
