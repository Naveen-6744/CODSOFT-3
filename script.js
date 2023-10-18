 function showTime() {
  var updateClock = function () {
    var date = new Date();
    var h = date.getHours() % 12 || 12;
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = h < 12 ? "AM" : "PM";
    
    var time = h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + " " + session;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
  };

  updateClock();

  setInterval(updateClock, 1000);
}

showTime();
