let balance = 100000000;
let startAmount = 10;

let amount = startAmount;

let count = 0;
while (amount < balance) {
    count++
    if(count > 100000) break;
    if (Math.random() > 0.5) {
        balance -= amount;
        amount *= 2;
    } else {
        balance += (amount * 2);
        amount = startAmount;
    }
    if(amount > balance) console.log("BANKRUPT")
}

console.log(balance);