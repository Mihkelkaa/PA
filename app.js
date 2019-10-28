// Tsüklid

// for Trükslid
// üldtsüklid
let arv;
for(let arv = 1; arv <= 10; arv++){
    lause ='arv = ';
    if (arv < 10){
    lause = lause + ' ';
} 
lause = lause + arv;
if (arv % 2 == 0){
    lause = lause + ' - paaris'
} else {
    lause = lause + ' - paaritu';
}
console.log(lause);

if(arv >= 5) {
    break;
}
}




let numbrid = [];
// lisame nimekirja sisse juhusliukud arvud
for (let i = 0; i < 10; i++)
{
    let arv = Math.floor(Math.floor()* 10);
    numbrid.push(arv);
}
// kontrollime tulemust
console.log(numbrid);
// sorteerime kasvujärjekorras
//numbrid.sort();
for (let i = 0; i < numbrid.length; i++){
for (let kord = 0; kord < numbrid.length; kord++){
    let abi;
    if (numbrid [i] > numbrid [i+1]){
        abi = numbrid [i];
        numbrid [i] = numbrid [i+1];
        numbrid [i+1] = abi;
    }
    console.log(numbrid);
    
}
// kontrollime tulemust
console.log(numbrid);
}


