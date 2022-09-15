
function showHidFun() {
    var xDiv = document.getElementById("showHidDIV");
    var yButt =document.getElementById("butt")
    if (xDiv.style.display == "none") {
      xDiv.style.display = "block";
      yButt.textContent="hide info"
    } else {
      xDiv.style.display = "none";
      yButt.textContent="show info"
    }
  }
function loopFun(){
  let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("arrayPrint").innerHTML = "Today is " + day;


const days = [ "Sun.", "Mon.", "Tue.", "Wed.","Thu.","Fri.","Sat."];

let text = "";
for (let i = 0; i < days.length; i++) {
  text += days[i]+" "  ;
}

document.getElementById("arrayPrint").innerHTML = text;
}