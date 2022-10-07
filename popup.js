/*// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}*/




//function sendwaf() {
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
//  }
