function showHidFun() {
  var xDiv = document.getElementById("showHidDIV");
  var yButt = document.getElementById("butt");
  if (xDiv.style.display == "none") {
    xDiv.style.display = "block";
    yButt.textContent = "hide info";
  } else {
    xDiv.style.display = "none";
    yButt.textContent = "show info";
  }
}
var formLabels = document.getElementsByTagName("label");
function validation() {
  var valid = true;
  var firstname = document.getElementById("first-name").value;
  var lastname = document.getElementById("last-name").value;
  var phone = document.getElementById("exampleInputPhone").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var textarea = document.getElementById("text-area").value;
  try {
    if (firstname == "") {
      formLabels[0].innerHTML = "First Name: * [Required]";
      formLabels[0].style.color = "red";
      valid = false;
    } else if (!isNaN(firstname)) {
      formLabels[0].innerHTML = "First Name: * [Text Only]";
      formLabels[0].style.color = "red";
      valid = false;
    } else {
      formLabels[0].innerHTML = "First Name: [Correct]";
      formLabels[0].style.color = "green";
      valid = valid ? true : false;
    }
    if (lastname == "") {
      formLabels[1].innerHTML = "Last Name: * [Required]";
      formLabels[1].style.color = "red";
      valid = false;
    } else if (!isNaN(lastname)) {
      formLabels[1].innerHTML = "Last Name: * [Text Only]";
      formLabels[1].style.color = "red";
      valid = false;
    } else {
      formLabels[1].innerHTML = "Last Name: [Correct]";
      formLabels[1].style.color = "green";
      valid = valid ? true : false;
    }
    if (phone == "") {
      formLabels[2].innerHTML = "Phone: * [Required]";
      formLabels[2].style.color = "red";
      valid = false;
    } else if (isNaN(phone)) {
      formLabels[2].innerHTML = "Phone: * [Numbers Only]";
      formLabels[2].style.color = "red";
      valid = false;
    } else {
      formLabels[2].innerHTML = "Phone: [Correct]";
      formLabels[2].style.color = "green";
      valid = valid ? true : false;
    }
    var reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == "") {
      formLabels[3].innerHTML = "Email: * [Required]";
      formLabels[3].style.color = "red";
      valid = false;
    } else if (!reg.test(email)) {
      alert("fai");
      formLabels[3].innerHTML = "Email: * [Incorrect Email]";
      formLabels[3].style.color = "red";
      valid = false;
    } else {
      formLabels[3].innerHTML = "Email: [Correct]";
      formLabels[3].style.color = "green";
      valid = valid ? true : false;
    }
    if (textarea == "") {
      formLabels[5].innerHTML = "Comments: * [Required]";
      formLabels[5].style.color = "red";
      valid = false;
    } else {
      formLabels[5].innerHTML = "Comments: [Done]";
      formLabels[5].style.color = "green";
      valid = valid ? true : false;
    }
    var radio1 = document.forms["myform"]["Things you liked?"];
    if (
      radio1[0].checked == false &&
      radio1[1].checked == false &&
      radio1[2].checked == false
    ) {
      formLabels[4].innerHTML = "Things you liked? * [Required]";
      formLabels[4].style.color = "red";
      valid = false;
    } else {
      formLabels[4].innerHTML = "Things you liked? [Done]";
      formLabels[4].style.color = "green";
      valid = valid ? true : false;
    }
  } catch (err) {
    alert("The validation unsuccessful: "+err.message);
  }
  return valid;
}
function clear2() {
  var myLabels = new Array();
  myLabels[0] = "First Name: ";
  myLabels[1] = "Last Name: ";
  myLabels[2] = "Phone: ";
  myLabels[3] = "Email: ";
  myLabels[4] = "Things you liked?";
  myLabels[5] = "Write comments to improve my site: ";
  for (var i = 0; i < myLabels.length; i++) {
    formLabels[i].innerHTML = myLabels[i];
    formLabels[i].style.color = "black";
  }
}
