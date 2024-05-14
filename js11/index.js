//hoisting (izvlacenje) metoda
var x=2;
var y= 3;
var z=x+y;
console.log(z);
function zbroji(){
    let n = 2; //mora bit na pocetku definiran
    n =3;
    let m=4;
    console.log(m+n);

};

zbroji();

//anonimna funkcija u zagradama (function(){})

//closure
var x= "John Doe";

function vratiNesto(name){
  var x=name;
  function f(){
    return x;
  }
  return f;

}

var y= vratiNesto("Jande Doe");
console.log(z);

var z= vratiNesto("test")();
console.log(z);
//proto objects (.toStrig())


//----------Zadatak: nadi prototip objekta char
var char={

    name:"Eleven",
    show:"Stranger Things",
    potrayedBy:"Millie Bobby Brown",
};

const quotes=[
"I'm going to my friends. I'm going home.",
"Pure fuel! PURE FUEL!WOO!",
"See?Zoomer",
"Bitching.",

]

var proto1=Object.getPrototypeOf(char);
console.log(proto1);//prvi se ne more mijenjat __proto__

var proto2=Object.getPrototypeOf();


//constructor Osoba
//objekt/funkcija definiran kao klasa
function Osoba(){
    (this.ime="Ana"),
    (this.godine=25);

}

var osoba1=new Osoba();
console.log("Osoba1 =: "+ osoba1.ime +"; ima godina: " +osoba1.godine);
Osoba.prototype.spol="Zensko";
console.log("Osoba1 =: "+ osoba1.ime +"; ima godina: " +osoba1.godine + "spol: "+ osoba1.spol);
var osoba2= new Osoba();
osoba2.spol="musko";










//ispit-razlika izmedu var-global,let-lokalna unutar scopea i const-nepromjenjiva vrijednost