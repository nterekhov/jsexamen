function isEven(getal){
    if (getal % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mijnArray = [1, 2, 6, 7, 9, 10]

for (let getal of mijnArray){
    if (isEven(getal) == true){
        console.log(getal);
    }
}