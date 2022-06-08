var attempt = 3; /*somente 3 tentativas*/

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "User" && password == "1234"){
alert ("Logado com sucesso");
window.location = "/index.html"; 
return false;
}
else{
attempt --;
alert("Você tem mais "+attempt+" tentativas;");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
