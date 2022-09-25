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
function validation() { 
 
  var FName = document.getElementById("labelFN");
  var LName = document.getElementById("labelLN");
  var labelphone = document.getElementById("labelPhone");
  var labelMail = document.getElementById("labelMail");
  var labelComments = document.getElementById("labelComments");
  var likedLabels = document.getElementById("labelLiked");
  
  var valid = true;
  var firstname = document.getElementById("first_name").value;
  var lastname = document.getElementById("last_name").value;
  var phone = document.getElementById("exampleInputPhone").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var textarea = document.getElementById("text_area").value;
  try {
    if (firstname == "") {
      FName.innerHTML = "First Name: * [Required]";
      FName.style.color = "red";
      valid = false;
    } else if (!isNaN(firstname)) {
      FName.innerHTML = "First Name: * [Text Only]";
      FName.style.color = "red";
      valid = false;
    } else {
      FName.innerHTML = "First Name: [Correct]";
      FName.style.color = "green";
      valid = valid ? true : false;
    }
    if (lastname == "") {
      LName.innerHTML = "Last Name: * [Required]";
      LName.style.color = "red";
      valid = false;
    } else if (!isNaN(lastname)) {
      LName.innerHTML = "Last Name: * [Text Only]";
      LName.style.color = "red";
      valid = false;
    } else {
      LName.innerHTML = "Last Name: [Correct]";
      LName.style.color = "green";
      valid = valid ? true : false;
    }
    if (phone == "") {
      labelphone.innerHTML = "Phone: * [Required]";
      labelphone.style.color = "red";
      valid = false;
    } else if (isNaN(phone)) {
      labelphone.innerHTML = "Phone: * [Numbers Only]";
      labelphone.style.color = "red";
      valid = false;
    } else {
      labelphone.innerHTML = "Phone: [Correct]";
      labelphone.style.color = "green";
      valid = valid ? true : false;
    }
    var reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == "") {
      labelMail.innerHTML = "Email: * [Required]";
      labelMail.style.color = "red";
      valid = false;
    } else if (!reg.test(email)) {
      alert("fai");
      labelMail.innerHTML = "Email: * [Incorrect Email]";
      labelMail.style.color = "red";
      valid = false;
    } else {
      labelMail.innerHTML = "Email: [Correct]";
      labelMail.style.color = "green";
      valid = valid ? true : false;
    }
    if (textarea == "") {
      labelComments.innerHTML = "Comments: * [Required]";
      labelComments.style.color = "red";
      valid = false;
    } else {
      labelComments.innerHTML = "Comments: [Done]";
      labelComments.style.color = "green";
      valid = valid ? true : false;
    }
    var radio1 = document.forms["myform"]["Things you liked?"];
    if (
      radio1[0].checked == false &&
      radio1[1].checked == false &&
      radio1[2].checked == false
    ) {
      likedLabels.innerHTML = "Things you liked? * [Required]";
      likedLabels.style.color = "red";
      valid = false;
    } else {
      likedLabels.innerHTML = "Things you liked? [Done]";
      likedLabels.style.color = "green";
      valid = valid ? true : false;
    }
  } catch (err) {
    alert("The validation unsuccessful: " + err.message);
  }
  return valid;
}
function clear2() {
  var formLabels = document.getElementsByTagName("label");
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

function Back(){
  var form=document.getElementById("form");
  var divResult=document.getElementById("results");
  divResult.style.display="none"; 
  form.style.display="block";}
