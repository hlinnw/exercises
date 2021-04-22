window.onload = function () {
  let seconds = 00;
  // console.log(typeof seconds);
  let milliSecond = 00;
  let appendSeconds = document.getElementById("seconds");
  let appendMilliSecond = document.getElementById("millSeconds");
  let start = document.getElementById("button-start");
  let stop = document.getElementById("button-stop");
  let reset = document.getElementById("button-reset");
  let interval;
  debugger;
  //   console.log(start);
  start.onclick = function () {
    clearInterval(interval);
    interval = setInterval(myTimer, 10);
  };

  stop.onclick = function () {
    clearInterval(interval);
  };

  reset.onclick = function () {
    clearInterval(interval);
    milliSecond = "00";
    seconds = "00";
    appendMilliSecond.innerHTML = milliSecond;
    appendSeconds.innerHTML = seconds;
  };

  function myTimer() {
    milliSecond++;
    if (milliSecond <= 9) {
      appendMilliSecond.innerHTML = "0" + milliSecond;
    }
    if (milliSecond > 9) {
      appendMilliSecond.innerHTML = milliSecond;
    }
    if (milliSecond > 99) {
      console.log(seconds);
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliSecond = 0;
      appendMilliSecond.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
