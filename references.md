https://stackoverflow.com/questions/49236100/copy-text-from-span-to-clipboard → To copy span

https://stackoverflow.com/questions/60217202/copy-text-to-clipboard-now-that-execcommandcopy-is-obsolete → execcommandcopy must be changed ASAP





;========================================================
var target = whatevermethodtogetelement();
var inject = document.createElement("typeofTAG");
var content = "Some stuff...";
inject.append(content);
target.append(inject);
;========================================================

function copyfunction() {
      var copyText = document.getElementById("some-stuf");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
}

;========================================================
;========================================================
;========================================================
;========================================================
;========================================================