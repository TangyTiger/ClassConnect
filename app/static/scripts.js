

function submit() {
  var dropdown = document.getElementById('dropdown');
  if (dropdown.value == "carpool") {
    console.log("hi");
    document.getElementById("formthing").innerHTML = `
    <p>Title (a few words describing the carpool)</p>
    <input type = "text" id = "carpoolPostTitle" name = "carpoolPostTitle" placeholder="Title">
    <br>
    <br>
    <p>Description (longer description about the carpool)</p>
    <textarea rows = "6" cols = "50" id = "carpoolPostDescription" name = "carpoolPostDescription" placeholder="Description"></textarea>
    <br>
    <br>
    <p>Your Name</p>
    <input type = "text" id = "carpoolPostName" name = "carpoolPostName"><br>
    <br>
    <p>Your Email</p>
    <input type = "text" id = "carpoolPostEmail" name = "carpoolPostEmail">
    <br>
    <br>

    <p>Phone Number (optional)</p>
    <input type = "text" id = "carpoolPostPhone" name = "carpoolPostPhone">
    `
  } else if (dropdown.value == "tutor") {
    console.log("bye");
    // Insert Tutor HTML
  } else if(dropdown.value == "supplies") {
    console.log("yes");
    // Insert Supplies HTML
  } else if(dropdown.value == "question") {
    console.log("no");
    //Insert question HTML
  }
}

