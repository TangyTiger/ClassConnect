

function submit() {
  window.dropdown = document.getElementById('dropdown');
  if (dropdown.value == "carpool") {
    console.log("hi");
    document.getElementById("formthing").innerHTML = `
    <p>Title (include the destination)</p>
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
    <button onclick="send_carpool()" class="btn btn-primary">Submit</button>
    `
  } else if (dropdown.value == "tutor") {
    console.log("bye");
    document.getElementById("formthing").innerHTML = `
    <p>Job Title (include your name)</p>
    <input type = "text" id = "tutorPostTitle" name = "tutorPostTitle" placeholder="Title">
    <br>
    <br>
    <p>Description (longer description of the services you offer, your qualifications)</p>
    <textarea rows = "6" cols = "50" id = "tutorPostDescription" name = "tutorPostDescription" placeholder="Description"></textarea>
    <br>
    <br>
    <p>What subject are you teaching?</p>
    <select class="btn btn-primary" id = "tutorPostSubject" name = "tutorPostSubject">
      <option value="English">English</option>
      <option value="Science">Science</option>
      <option value="Math">Math</option>
      <option value="Social Studies">Social Studies</option>
      <option value="Computer Science">Computer Science</option>
      <option value="World Languages">World Language</option>
    </select>
    <br><br>
    <p>Your Fee Per Hour</p>
    <label>$ </label><input type = "text" id = "tutorPostFee" name = "tutorPostFee"><br>
    <br>
    <p>Your Email</p>
    <input type = "text" id = "tutorPostEmail" name = "tutorPostEmail">
    <br>
    <br>

    <p>Phone Number (optional)</p>
    <input type = "text" id = "tutorPostPhone" name = "tutorPostPhone">
    <button onclick="send_tutor()" class="btn btn-primary">Submit</button>
    `
  } else if(dropdown.value == "supplies") {
    console.log("yes");
    document.getElementById("formthing").innerHTML = `
    <p>Post Title (what supplies do you need?)</p>
    <input type="text" id="supplyPostTitle" name="supplyPostTitle" placeholder="Title">
    <br>
    <br>
    <p>Description (specifications for what supplies you need, how many, when, etc.)</p>
    <textarea rows="6" cols="50" id="supplyPostDescription" name="supplyPostDescription"></textarea>
    <br>
    <br>
    <p>Your Email</p>
    <input type="text" id="supplyPostEmail" name="supplyPostEmail" >
    <br>
    <br>
    <p>Phone Number (optional)</p>
    <input type="text" id="supplyPostPhone" name="supplyPostPhone">
    <button onclick="send_supply()" class="btn btn-primary">Submit</button>
    `
  } else if(dropdown.value == "question") {
    console.log("no");
    document.getElementById("formthing").innerHTML = `
    <p>Post Title (summarize your question)</p>
    <input type="text" id="questionPostTitle" name="questionPostTitle" placeholder="Title">
    <br>
    <br>
    <p>Description (Elaborate on your question, tell us exactly what you need to know)</p>
    <textarea rows="6" cols="50" id="questionPostDescription" name="questionPostDescription"></textarea>
    <br>
    <br>
    <button onclick="send_supply()" class="btn btn-primary">Submit</button>
    `
  }
}

function send_carpool() {
    var type = dropdown.value
    var title = document.getElementById("carpoolPostTitle").value
    var description = document.getElementById("carpoolPostDescription").value
    var name = document.getElementById("carpoolPostName").value
    var email = document.getElementById("carpoolPostEmail").value
    var phone = document.getElementById("carpoolPostPhone").value
    location.href = "/submitpost?type=" + type + "&title=" + title + "&description=" + description + "&name=" + name + "&email=" + email + "&phone=" + phone

}

function send_tutor() {
  var type = dropdown.value
  var title = document.getElementById('tutorPostTitle').value
  var description = document.getElementById("tutorPostDescription").value
  var fee = document.getElementById('tutorPostFee').value
  var email = document.getElementById('tutorPostEmail').value
  var phone = document.getElementById('tutorPostPhone').value
  var subject = document.getElementById('tutorPostSubject').value
  location.href = "/submitpost?type=" + type + "&title=" + title + "&description=" + description + "&fee=" + fee + "&email=" + email + "&phone=" + phone + "&subject=   " + subject
}

function send_supply() {
  var type = dropdown.value
  var title = document.getElementById("supplyPostTitle").value
  var description = document.getElementById("supplyPostDescription").value
  var email = document.getElementById('supplyPostEmail').value
  var phone = document.getElementById('supplyPostPhone').value
  location.href = "/submitpost?type=" + type + "&title=" + title + "&description=" + description + "&email=" + email + "&phone=" + phone
}

function send_question() {
  var type = dropdown.value
  var title = document.getElementById("questionPostTitle").value
  var description = document.getElementById('questionPostDescription').value
  location.href = "/subimtpost?type=" + type + "&title=" + title + "&description=" + description
}

 function viewIndivialTutorPosts(data) {
   $.get({url: "/getTutorPost", data: data}, function(data, status){
     window.Title = data.title
     window.Subject = data.subject
     window.Description = data.description
     window.Fee = data.fee
     window.Email = data.email
     window.Phone = data.phone


 })
   document.getElementById("info").innerHTML = `
   <h1>` + data.title + `</h1>
  `
 }
