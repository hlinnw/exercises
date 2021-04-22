function showTime() {
  var date = new Date();
  var hour = date.getHours(); //0-23
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = hour + ":" + m + ":" + s + ":" + session;

  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
