
//submit button nclicked
function openWindow() {


}

function saveData() {
  var data = {};
  for (var i = 0; i < 8; i++) {
    data[i.toString()] = document.getElementById(`input-${i}`).value;
  }
  localStorage.setItem("data", JSON.stringify(data));
  location.href = "index.html";
}

document.getElementById("go-back").addEventListener("click", saveData)

var data = JSON.parse(localStorage.getItem("data"))
for (var i = 0; i < 8; i++) {
  document.getElementById(`input-${i}`).value = data[i.toString()] || "";
}