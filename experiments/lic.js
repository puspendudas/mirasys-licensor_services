import alea from 'alea';
let rng = alea(0);

; (async () => {
    // let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // text = text.split('').map((c, i) => {return {c: c, r: random()}})
    // text.sort((a, b) => {return a.r - b.r});
    // console.log(text.map((c) => {return c.c}).join(''));

    
})();

function random() {
    genCount++;
    // console.log(genCount);
    return rng();
}


// 0.2 - 0.5 = -0.3
// 0.2 - 0.5 = -0.3 