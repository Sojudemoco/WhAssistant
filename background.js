// background.js

//let color = '#3aa757';
let color = 'black';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});



function sendwaf() {
  var copyText = document.getElementById("numberal");
  var removedText = copyText.value.replace(/\D+/g, '');
  if (removedText.length = 10) {
    $.notify("NO SE HA DETECTADO EL NÚMERO", "error");
  } else {
    //copyText.select();
    //copyText.setSelectionRange(0, 99999);
    //navigator.clipboard.writeText("https://web.whatsapp.com/send/?phone=521" + copyText.value + "&text&type=phone_number&app_absent=0");
    var URL = "https://web.whatsapp.com/send/?phone=521" + removedText + "&text&type=phone_number&app_absent=0";
    console.log("Se está redirigiendo a: " + URL);
    numberal.value = "";
    //window.open(URL);

    //notif();
  }
