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
class Player{
    constructor(name, handcard, points){
        this.name = name;
        this.handcard = handcard;
        this.points = points;
    }
    numberPlayer(numberOfPlayer){
        for(var number = 0; number < numberOfPlayer; number ++){
            name = prompt("Namen eingeben:");
            this.name = name;
            this.handcard = [3,4,5];
            console.log(Player[number]);
        }
    }
}

