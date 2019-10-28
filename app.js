// Tsüklid

// while 
// eelkontrolliga tsükkel
let arv = 5; // defineerime numbri
// defineerime jagaja algväärtuse 
let jagaja = 2
//suurendame jagaja väärtust nii kaua, kui 
//jagamise jääk on 0
while(arv % jagaja !=0){
    jagaja++;
}
// kontrollime , kas jagasime sama arvuga
if(arv == jagaja){
    console.log(arv + 'on algarv');
} else {
    console.log(arv + ' ei ole algarv');
}