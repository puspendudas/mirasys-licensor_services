const alea = require('alea');

// let rng = alea(100);
let rng = alea(101);

let sum = 0;
for (let i = 0; i < 100000000; i++) {
    sum += rng() - 0.5;
}
console.log(sum);