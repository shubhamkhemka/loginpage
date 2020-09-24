window.addEventListener('load',bindevents);
function bindevents(){
  document.querySelector('#submit').addEventListener('click',submitform);
  
}
function submitform(){
    var email=document.querySelector('#email').value;
    var pwd=document.querySelector('#password').value;
    var xhr = new XMLHttpRequest();
    var obj={email,pwd};
xhr.open("POST", "https://reqres.in/api/register",obj);
xhr.onload = function(){
    console.log(xhr.responseText);
};
xhr.send();

}