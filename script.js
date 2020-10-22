

var emailList =["@gmail", "@libero", "@virgilio", "@hotmail", "@icloud"];
var question = prompt("inserire la tua e-mail");

for (var z = 0; z < emailList.length; z++){

  if  (emailList[z] == question ){
     var good = 'email corretta';
     document.getElementById("messaggio").innerHTML = good ;
  }

    var bad = 'email sbagliata';
    document.getElementById("messaggio").innerHTML = bad ;

  
};
