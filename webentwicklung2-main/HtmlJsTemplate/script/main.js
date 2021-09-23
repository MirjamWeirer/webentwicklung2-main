"use strict";

// hier kommen ihre Skripte hin
const a = Math.random(), b = Math.random();

let abfrage = prompt("Welche Rechnungsoperation möchten sie verwenden");
console.log(abfrage);
function add(a,b){
    return (a+b);
}

function sub (a,b){
    return (a-b);
}

function div (a,b){
    return (a/b);
}

function mul(a,b){
    return (a*b);
}

if (abfrage == "+"){
    console.log(add());
}else if(abfrage == "-"){
    console.log(sub());
}else if (abfrage == "/"){
    console.log(diq());
}else if(abfrage == "*"){
    console.log(mul());
}