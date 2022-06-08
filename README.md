<div align="center">

# Construção de Software para Web
## Projeto B2
     
</div>
Por: Vitória Pizzol Belshoff </br>
Professor: Ricardo Mendes Costa Segundo</br>

## Sobre o Projeto

No projeto foi desenvolvido um site para refugiadas, utilizando as linguages HTML, CSS e JS. 

## Java Script

Com o JS foi possível fazer com que o usuário colocasse um user e uma senha para logar no site. Isso foi possível usando o código: 

<pre> 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "User" && password == "1234"){
alert ("Login successfully");
window.location = "/index.html"; 
return false;
}
</pre>

Caso o usuário não coloque um desses elementos corretamente, ele terá mais 2 tentatiavas. <br/>
Primeiro foi criado uma variável para 3 tentativas:
<pre>
var attempt = 3; 
</pre>

Junto com a function validate foi criado o else caso o usuário erre uma vez. Se isso ocorrer aparece uma mensagem de aviso que ele só tem mais 2 tentativas:
<pre>
else{
attempt --;
alert("You have left "+attempt+" attempt;");
</pre>

E caso ele erre todas as tentativas, é desativado o user e a senha, fazendo com ele não consiga mais digitar:
<pre>
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
</pre>

## CSS
No css da página principal teve uma tentativa de criar a responsividade do site com o:
<pre>
@media only screen and (max-width: 700px){
 body{
font-size: 30px;
 }
</pre>

Pra que quando a tela ficar com o width máximo de 700px mudar os padrões da tela, como o tamanho da fonte, que mudou de 20px pra 30px etc.








