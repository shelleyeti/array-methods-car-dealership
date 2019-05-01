//find the highes occuring value
function mode(arr) {
  return arr
    .sort((a, b) =>
        arr.filter(v => v === a).length - 
        arr.filter(v => v === b).length)
    .pop();
}

//loops through to grab gross profit for each object
const grossProfit = carDealership
    .map(vehicle => vehicle.gross_profit)
    .reduce((total, num)=> total += num);
//total gross profit of all vehicles
outElProfit.innerHTML += (Math.floor(grossProfit));


//grabs all months from date string
const monthOnly = carDealership
.map(date => date.purchase_date.split("-")[1]);
//highest grossing month
outElMonth.innerHTML += (mode(monthOnly));

//total all the profits individually and then see who's the most
//grabs all salespersons' Id
const salespersonId = carDealership.map(salesId => salesId.sales_id);
//highest grossing salesperson
outElSalesSold.innerHTML += (mode(salespersonId));


//




const loanProviders = carDealership
.map(bank => bank.credit.credit_provider)
.sort()

console.log(loanProviders)