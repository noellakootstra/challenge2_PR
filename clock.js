function showTime() {
    var now    =  new Date(),
    hours      =  now.getHours(),
    minutes    =  now.getMinutes(),
    seconds    =  now.getSeconds();
    if (hours < 10) {
        hours   = '0' + hours;
     }
    
    if (minutes < 10) {
        minutes = '0' + minutes;
     }
    
    if (seconds < 10) {
        seconds =  '0' + seconds;
     }
    
    if(hours > 8 && hours < 20){
        document.body.style.backgroundColor = "deepskyblue";
        document.getElementById("wolk1").style.visibility = "visible";
        document.getElementById("wolk2").style.visibility = "visible";
        document.getElementById("wolk3").style.visibility = "visible";
        document.getElementById("maan").style.visibility = "hidden";
        document.getElementById("planeetpaars").style.visibility = "hidden";
        document.getElementById("planeetrood").style.visibility = "hidden";
        } else{
        document.body.style.backgroundColor = "darkblue";
        document.body.style.color = "white";
        document.getElementById("wolk1").style.visibility = "hidden";
        document.getElementById("wolk2").style.visibility = "hidden";
        document.getElementById("wolk3").style.visibility = "hidden";
        document.getElementById("maan").style.visibility = "visible";
        document.getElementById("planeetpaars").style.visibility = "visible";
        document.getElementById("planeetrood").style.visibility = "visible";
        }
    
    document.getElementById('clock').textContent = hours + '' + ':' + '' + minutes + '' + ':' + '' + seconds;
}

window.onload = function() {
    "use strict";
    setInterval(showTime, 500);
}