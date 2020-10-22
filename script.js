

var emailList =["@gmail", "@libero", "@virgilio", "@hotmail", "@icloud"];
var question = prompt("inserire la tua e-mail");
var found = 'email sbagliata';
for (var z = 0; z < emailList.length; z++){

  if  (emailList[z] == question ){
     var found = 'email corretta';
  }
}
document.getElementById("messaggio").innerHTML = found  ;

MIN = 1;
MAX = 7;

var playerOne = Math.floor(Math.random() * (MAX - MIN));
var playerTwo = Math.floor(Math.random() * (MAX - MIN));


document.getElementById("giocuno").innerHTML = playerOne;

document.getElementById("giocdue").innerHTML = playerTwo;
