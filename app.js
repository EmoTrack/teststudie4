//Service Worker installieren: Code aus dem WWW kopiert --> Macht App installierbar

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

let x= 42;
let params = new URLSearchParams(document.location.search);
let first = params.get("first");
let serial = params.get("s")
let link = " 	https://s2survey.net/emowebstudie005701/?q=emotrack&s=";
console.log(serial);


//Installationsprompt

function install() {


  
  if (first == 123){
  localStorage.removeItem('serial');
  localStorage.clear(); 
  x=666;
  document.getElementById("firefox-prompt").style.display = "block";
  document.getElementById("samsung-prompt").style.display = "block";
  document.getElementById("help").style.display = "block";
    }
}
install();


function app(){
  
//SERIAL
//aus SMS/Weiterleitungslink
//aus lokalem Speicher

if(serial==null){
serial = localStorage.getItem('serial');
}  
console.log(serial);

localStorage.setItem('serial', serial);
console.log(serial);

let sosci_link = link+serial;
console.log(sosci_link);
if (x == 42) {window.location.href = sosci_link;}
  
}
app();

function done(){
  
if(serial==null){
serial = localStorage.getItem('serial');
}  
console.log(serial);

localStorage.setItem('serial', serial);
console.log(serial);

let sosci_link = link+serial;
console.log(sosci_link);
window.location.href = sosci_link;
}
