"use strict";

// hier kommen ihre Skripte hin
//const a = Math.random(), b = Math.random();
//console.log(a);
//console.log(b);
//let abfrage = prompt("Welche Rechnungsoperation möchten sie verwenden");
//console.log(abfrage);
//if (abfrage == "+"){
//    console.log(add(a,b));
//}else if(abfrage == "-"){
//    console.log(sub(a,b));
//}else if (abfrage == "/"){
//    console.log(diq(a,b));
//}else if(abfrage == "*"){
//    console.log(mul(a,b));
//}
//function add(a,b){
//    return a+b;
//}
//
//function sub (a,b){
//    return (a-b);
//}
//
//function div (a,b){
//    return (a/b);
//}
//
//function mul(a,b){
//    return (a*b);
//}
let numberOfPlayer = prompt("Anzahl?");
numberOfPlayer = Number(numberOfPlayer);
let player = [numberOfPlayer];
console.log(numberOfPlayer);
let handcard = {
    Color: "Blue",
    Value: 1,
}
const points = 0;
class Player{
    constructor(name, handcard, points){
        
        this.name = name;
        this.handcard = handcard;
        this.points = points;
    }
    numberPlayer(numberOfPlayer){
        for(let number = 0; number < numberOfPlayer; number ++){
            name = prompt("Namen eingeben:");
            player[number] = new Player();
            console.log(Player.name, Player.handcard, Player.points);
            
        }
    }
    
}
let numberPlayer = Player.numberPlayer(numberOfPlayer);