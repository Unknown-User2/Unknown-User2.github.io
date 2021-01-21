var oX = document.querySelector("#oX");

oX.nodeValue = "0"

oX.onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        console.log(oX.value);
    }
    if (!oX.getAttribute('focus')){
        console.log(oX.value);
    }
    console.log(oX.value);
}
