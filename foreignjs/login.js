var attempt = 3; /*somente 3 tentativas*/

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Ricardo" && password == "1234"){
alert ("Login successfully");
window.location = "https://tenkoria.github.io/index.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
