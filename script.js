

// Get the current time
function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Determine AM or PM
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be converted to 12

  // Format the time as HH:MM:SS AM/PM
  var Time = hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0') + ' ' + ampm;

  return Time;
}

var classNames = JSON.parse(localStorage.data || "{}")


// Update the time every second
function updateTime() {
  var currentTimeElement = document.getElementById('current-time');
  currentTimeElement.textContent = getCurrentTime();
  var date = new Date();
  var currentDay = date.getDay();
  var currentTime = date.getHours() * 60 + date.getMinutes();
  var classLabel = document.getElementById('classy');

  if (currentDay === 1) {
    if (currentTime >= 7 * 60 + 15 && currentTime < 8 * 60 + 15) {
      classLabel.innerText = classNames["0"] || "Not Set";
    }
    if (currentTime >= 8 * 60 + 30 && currentTime < 9 * 60 + 22) {
      classLabel.innerText = classNames["1"] || "Not Set";
    }
    if (currentTime >= 9 * 60 + 28 && currentTime <= 10 * 60 + 20) {
      classLabel.innerText = classNames["2"] || "Not Set";
    }
  }
  if (currentTime >= 10 * 60 + 26 && currentTime <= 11 * 60 + 18) {
    classLabel.innerText = classNames["3"] || "Not Set";
  }
  if (currentTime >= 11 * 60 + 24 && currentTime <= 12 * 60 + 16) {
    classLabel.innerText = classNames["4"] || "Not Set";
  }
  if (currentTime >= 12 * 60 + 16 && currentTime <= 12 * 60 + 51) {
    classLabel.innerText = "Lunch" || "Not Set";
    if (currentTime >= 12 * 60 + 57 && currentTime <= 13 * 60 + 49) {
      classLabel.innerText = classNames["5"] || "Not Set";
    }
    if (currentTime >= 13 * 60 + 55 && currentTime <= 14 * 60 + 47) {
      classLabel.innerText = classNames["6"] || "Not Set";
    }
    if (currentTime >= 14 * 60 + 53 && currentTime <= 15 * 60 + 45) {
      classLabel.innerText = classNames["7"] || "Not Set";
    }

  }
  if (currentDay === 2 || currentDay === 4) {
    if (currentTime >= 7 * 60 + 15 && currentTime < 8 * 60 + 15) {
      classLabel.innerText = classNames["0"] || "Not Set";
    }
    if (currentTime >= 8 * 60 + 30 && currentTime < 10 * 60 + 6) {
      classLabel.innerText = classNames["1"] || "Not Set";
    }
    if (currentTime >= 10 * 60 + 12 && currentTime <= 11 * 60 + 48) {
      classLabel.innerText = classNames["3"] || "Not Set";
    }
    if (currentTime >= 11 * 60 + 48 && currentTime <= 12 * 60 + 23) {
      classLabel.innerText = "Lunch" || "Not Set";
    }
    if (currentTime >= 12 * 60 + 29 && currentTime <= 14 * 60 + 5) {
      classLabel.innerText = classNames["5"] || "Not Set";
    }
    if (currentTime >= 14 * 60 + 11 && currentTime <= 15 * 60 + 47) {
      classLabel.innerText = classNames["7"] || "Not Set";
    }

  }

  if (currentDay === 3) {
    if (currentTime >= 9 * 60 && currentTime < 10 * 60 + 36) {
      classLabel.innerText = classNames["2"] || "Not Set";
    }
    if (currentTime >= 10 * 60 + 42 && currentTime < 12 * 60 + 23) {
      classLabel.innerText = classNames["4"] || "Not Set";
    }
    if (currentTime >= 12 * 60 + 23 && currentTime < 13 * 60 + 8) {
      classLabel.innerText = "Lunch Break" || "Not Set";
    }
    if (currentTime >= 13 * 60 + 14 && currentTime < 14 * 60 + 50) {
      classLabel.innerText = classNames["6"] || "Not Set";
    }
  }

  if (currentDay === 5) {
    if (currentTime >= 7 * 60 + 15 && currentTime < 8 * 60 + 15) {
      classLabel.innerText = classNames["0"] || "Not Set";
    }
    if (currentTime >= 8 * 60 + 30 && currentTime < 10 * 60 + 6) {
      classLabel.innerText = classNames["2"] || "Not Set";
    }
    if (currentTime >= 10 * 60 + 12 && currentTime < 11 * 60 + 53) {
      classLabel.innerText = classNames["4"] || "Not Set";
    }
    if (currentTime >= 11 * 60 + 53 && currentTime < 12 * 60 + 38) {
      classLabel.innerText = "Lunch" || "Not Set";
    }
    if (currentTime >= 12 * 60 + 44 && currentTime < 14 * 60 + 20) {
      classLabel.innerText = classNames["6"] || "Not Set";
    }

  }



}

// Update the time initially and start the timer
updateTime();
setInterval(updateTime, 1000);






var currentTime = new Date().getHours();
if (currentTime >= 18 && currentTime < 19) {
  document.getElementById('classy').innerHTML = badglob.per5;
}




/*next steps: to make the countdown recurring, set the timer to restart every day 

1.The startDailyCountdown function calculates the initial delay until the target time for the current day and then starts the countdown using setInterval.
2.Inside the setInterval function, the remaining time until the target time for the next day is calculated, and the updateCountdownDisplay function is called to update the display with the remaining time.
3.The updateCountdownDisplay function calculates the days, hours, minutes, and seconds from the remaining time and updates the display accordingly.*/

function countdownOddDay() {
  var resetTimes = [
    [10, 6, 0],
    [10, 12, 0],
    [11, 48, 0],
    [12, 23, 0],
    [12, 29, 0],
    [14, 5, 0],
    [14, 11, 0],
    [15, 47, 0]
  ];

  // Function to get the next reset time for the current day
  function getNextResetTime() {
    var now = new Date();
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    var currentSecond = now.getSeconds();
    var nextResetTime = null;

    // Iterate through resetTimes to find the next reset time
    for (var i = 0; i < resetTimes.length; i++) {
      var resetHour = resetTimes[i][0];
      var resetMinute = resetTimes[i][1];
      var resetSecond = resetTimes[i][2];

      if (
        currentHour < resetHour ||
        (currentHour === resetHour && currentMinute < resetMinute) ||
        (currentHour === resetHour && currentMinute === resetMinute && currentSecond < resetSecond)
      ) {
        // Found the next reset time
        nextResetTime = new Date();
        nextResetTime.setHours(resetHour);
        nextResetTime.setMinutes(resetMinute);
        nextResetTime.setSeconds(resetSecond);
        break;
      }
    }

    // If next reset time is not found, set it for the next day
    if (!nextResetTime) {
      nextResetTime = new Date();
      nextResetTime.setDate(nextResetTime.getDate() + 1);
      nextResetTime.setHours(resetTimes[0][0]);
      nextResetTime.setMinutes(resetTimes[0][1]);
      nextResetTime.setSeconds(resetTimes[0][2]);
    }

    return nextResetTime.getTime();
  }

  var interval = setInterval(function() {
    var now = new Date().getTime();
    var countdown = getNextResetTime();

    // Distance between now and the next reset time
    var distance = countdown - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Set inner HTML of label to the time left until countdown
    document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  }, 1000);
}
countdownOddDay();
