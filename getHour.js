function currentTime() {
    var date = new Date(); /* creating object of Date class */
 
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    var day = days[date.getDay()];
    var month = months[date.getMonth()];

    var currentDay = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    
    document.getElementById("clock").innerText = hour + ":" + min; /* adding time to the div */
    
    document.getElementById("seconds").innerText = sec; /* adding seconds to the div */
        var t = setTimeout(currentTime, 1000); /* setting timer */
    
    document.getElementById("midday").innerText = midday; /* adding midday to the div */

    document.getElementById("date").innerText = month + " " + currentDay + " - " + day; /* adding date to the div */
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    }
    
    else {
        return k;
    }
}

currentTime();