console.log("Welcome to the CountDown");
document.getElementById("start").onclick = function () {
  let inputInstance = document.getElementById("datetime").value;
  let inputMsec = new Date(inputInstance).getTime();
  // console.log("input" + inputMsec);
  let intervalID = setInterval(function () {
    let currentInstance = new Date();
    let currentMsec = currentInstance.getTime();
    // console.log("current" + currentMsec);
    let diff = inputMsec - currentMsec;
    // console.log(diff);
    document.getElementById("days").innerText = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );
    let remainingMsec = diff % (1000 * 60 * 60 * 24);
    document.getElementById("hours").innerText = Math.floor(
      remainingMsec / (1000 * 60 * 60)
    );
    remainingMsec = remainingMsec % (1000 * 60 * 60);
    document.getElementById("minutes").innerText = Math.floor(
      remainingMsec / (1000 * 60)
    );
    remainingMsec = remainingMsec % (1000 * 60);
    document.getElementById("seconds").innerText = Math.floor(
      remainingMsec / 1000
    );

    if (diff < 0) {
      clearInterval(intervalID);
      document.getElementById("seconds").innerText = "NA";
      document.getElementById("days").innerText = "NA";
      document.getElementById("hours").innerText = "NA";
      document.getElementById("minutes").innerText = "NA";
    }
  }, 1000);
};
