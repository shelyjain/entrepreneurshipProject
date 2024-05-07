// Get the current time
function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours() % 12 || 12; // Convert hours to 12-hour format
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  var ampm = now.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update the time every second
function updateTime() {
  var currentTimeElement = document.getElementById('current-time');
  currentTimeElement.textContent = getCurrentTime();
  var date = new Date();
  var currentDay = date.getDay();
  var currentTime = date.getHours() * 60 + date.getMinutes();
  var classLabel = document.getElementById('classy');
  var classNames = JSON.parse(localStorage.data || "{}");

  switch (currentDay) {
    case 1:
      if (currentTime >= 7 * 60 + 15 && currentTime < 8 * 60 + 15) {
        classLabel.innerText = classNames["0"] || "Not Set";
      } else if (currentTime >= 8 * 60 + 30 && currentTime < 9 * 60 + 22) {
        classLabel.innerText = classNames["1"] || "Not Set";
      } else if (currentTime >= 9 * 60 + 28 && currentTime <= 10 * 60 + 20) {
        classLabel.innerText = classNames["2"] || "Not Set";
      } else if (currentTime >= 10 * 60 + 26 && currentTime <= 11 * 60 + 18) {
        classLabel.innerText = classNames["3"] || "Not Set";
      } else if (currentTime >= 11 * 60 + 24 && currentTime <= 12 * 60 + 16) {
        classLabel.innerText = classNames["4"] || "Not Set";
      } else if (currentTime >= 12 * 60 + 16 && currentTime <= 12 * 60 + 51) {
        classLabel.innerText = "Lunch" || "Not Set";
      } else {
        classLabel.innerText = "Not Set";
      }
      break;
    case 2:
    case 4:
      if (currentTime >= 7 * 60 + 15 && currentTime < 8 * 60 + 15) {
        classLabel.innerText = classNames["0"] || "Not Set";
      } else if (currentTime >= 8 * 60 + 30 && currentTime < 10 * 60 + 6) {
        classLabel.innerText = classNames["1"] || "Not Set";
      } else if (currentTime >= 10 * 60 + 12 && currentTime <= 11 * 60 + 48) {
        classLabel.innerText = classNames["3"] || "Not Set";
      } else if (currentTime >= 11 * 60 + 48 && currentTime <= 12 * 60 + 23) {
        classLabel.innerText = "Lunch" || "Not Set";
      } else if (currentTime >= 12 * 60 + 29 && currentTime <= 14 * 60 + 5) {
        classLabel.innerText = classNames["5"] || "Not Set";
      } else if (currentTime >= 14 * 60 + 11 && currentTime <= 15 * 60 + 47) {
        classLabel.innerText = classNames["7"] || "Not Set";
      } else {
        classLabel.innerText = "Not Set";
      }
      break;
    case 3:
      if (currentTime >= 9 * 60 && currentTime < 10 * 60 + 36) {
        classLabel.innerText = classNames["2"] || "Not Set";
      } else if (currentTime >= 10 * 60 + 42 && currentTime < 12 * 60 + 23) {
        classLabel.innerText = classNames["4"] || "Not Set";
      } else if (currentTime >= 12 * 60 + 23 && currentTime < 13 * 60 + 8) {
        classLabel.innerText = "Lunch Break" || "Not Set";
      } else if (currentTime >= 13 * 60 + 14 && currentTime < 14 * 60 + 50) {
        classLabel.innerText = classNames["6"] || "Not Set";
      } else {
        classLabel.innerText = "Not Set";
      }
      break;
    case 5:
      if (currentTime >= 7 * 60 + 15 && currentTime < 8 * 60 + 15) {
        classLabel.innerText = classNames["0"] || "Not Set";
      } else if (currentTime >= 8 * 60 + 30 && currentTime < 10 * 60 + 6) {
        classLabel.innerText = classNames["2"] || "Not Set";
      } else if (currentTime >= 10 * 60 + 12 && currentTime < 11 * 60 + 53) {
        classLabel.innerText = classNames["4"] || "Not Set";
      } else if (currentTime >= 11 * 60 + 53 && currentTime < 12 * 60 + 38) {
        classLabel.innerText = "Lunch" || "Not Set";
      } else if (currentTime >= 12 * 60 + 44 && currentTime < 14 * 60 + 20) {
        classLabel.innerText = classNames["6"] || "Not Set";
      } else {
        classLabel.innerText = "Not Set";
      }
      break;
    default:
      classLabel.innerText = "Not Set";
  }
}

// Update the time initially and start the timer
updateTime();
setInterval(updateTime, 1000);

function countdownWed() {
  var resetWedTimes = [
    [9, 0, 0],
    [10, 36, 0],
    [10, 42, 0],
    [12, 23, 0],
    [13, 8, 0],
    [13, 14, 0],
    [14, 50, 0]
  ];

  // Function to get the next reset time for the current day
  function getNextResetTime() {
    var now = new Date();
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    var currentSecond = now.getSeconds();
    var nextResetTime = null;

    // Iterate through resetWedTimes to find the next reset time
    for (var i = 0; i < resetWedTimes.length; i++) {
      var resetHour = resetWedTimes[i][0];
      var resetMinute = resetWedTimes[i][1];
      var resetSecond = resetWedTimes[i][2];

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
      nextResetTime.setHours(resetWedTimes[0][0]);
      nextResetTime.setMinutes(resetWedTimes[0][1]);
      nextResetTime.setSeconds(resetWedTimes[0][2]);
    }

    return nextResetTime.getTime();
  }

  var interval = setInterval(function() {
    var now = new Date().getTime();
    var countdown = getNextResetTime();

    // Distance between now and the next reset time
    var distance = countdown - now;

    // Time calculations for days, hours, minutes, and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Set inner HTML of label to the time left until countdown
    document.getElementById('countdown').innerHTML = hours + "h " + minutes + "m " + seconds + "s" + " until period ends.";
  }, 1000);
}

countdownWed();

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
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Set inner HTML of label to the time left until countdown
    document.getElementById('countdown').innerHTML = hours + "h " + minutes + "m " + seconds + "s" + " until period ends.";
  }, 1000);
}

countdownOddDay();

// Check if it's after 6 PM and set class accordingly
var currentTime = new Date().getHours();
if (currentTime >= 18 && currentTime < 19) {
  document.getElementById('classy').innerHTML = badglob.per5;
}
