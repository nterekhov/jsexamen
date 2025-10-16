const aantal = parseInt(prompt("Hoeveel namen wil je ingeven?"));
let namen = []
let teller = 0;

for (let i = 1; i <= aantal; i++){
    input = window.prompt(`Geef naam ${i} in.`)
    namen.push(input)
}

for(let naam of namen){
    if (naam.length >= 5){
        teller++;
    }
}

console.log(`${teller} namen zijn langer dan 5 letters.`)