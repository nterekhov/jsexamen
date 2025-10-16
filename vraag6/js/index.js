let score = parseInt(window.prompt("Wat is jouw score op 20?"))

if(score < 10){
    console.log("Onvoldoende")
}else if(score >= 10 && score <= 13) {
    console.log("Voldoende")
}else if(score >= 14 && score <= 17){
    console.log("Goed")
}else if(score >= 18){
    console.log("Uitstekend")
}