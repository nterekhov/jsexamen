let getallen = []

for (let i = 1; i <= 5; i++){
    input = parseInt(window.prompt(`Geef getal ${i} in.`))
    getallen.push(input)
}

for (let getal of getallen){
    if(getal > 10){
        console.log(getal)
    }
}

