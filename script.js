console.log("Welcome to the CountDown");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
  dd='0'+dd;
if(mm<10)
  mm='0'+mm;
var hour = today.getHours();
var minutes = today.getMinutes();
today = yyyy+'-'+mm+'-'+dd+'T'+hour+':'+minutes;
document.getElementById("datetime").setAttribute("min", today);
document.getElementById("start").onclick = function () {
  let inputInstance = document.getElementById("datetime").value;
  let inputMsec = new Date(inputInstance).getTime();
  let intervalID = setInterval(function () {
    let currentInstance = new Date();
    let currentMsec = currentInstance.getTime();
    let diff = inputMsec - currentMsec;
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
