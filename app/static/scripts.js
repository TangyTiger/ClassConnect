

function submit() {
  var dropdown = document.getElementById('dropdown');
  if (dropdown.value == "carpool") {
    console.log("hi");
    document.getElementById("formthing").innerHTML = `
    <input type = "text" id = "carpoolPostTitle" name = "carpoolPostTitle" placeholder="title"><br>
    <input type = "text" id = "carpoolPostDescription" name = "carpoolPostDescription" placeholder="title"><br>

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
