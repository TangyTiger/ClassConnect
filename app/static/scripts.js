var marker
var marked
var mymap
var lat
var lng
function onMapClick(e) {
  if (marked) {
    mymap.removeLayer(marker)
  }
  marked = true
  marker = new L.circle(e.latlng, {
    color: 'red',
    fill: 'f03',
    fillOpacity: 0.4,
    radius: 1300
  }).addTo(mymap);
  var loc = e.latlng
  lat = loc.lat
  lng = loc.lng
}
function submit() {
  window.dropdown = document.getElementById('dropdown');
  if (dropdown.value == "carpool") {
    console.log("hi");
    document.getElementById("formthing").innerHTML = `
    <p>Title (include the destination)</p>
    <input type = "text" id = "carpoolPostTitle" name = "carpoolPostTitle" placeholder="Title">
    <br>
    <br>
    <p>Description (longer description about the carpool, include timings and special notes)</p>
    <textarea rows = "6" cols = "50" id = "carpoolPostDescription" name = "carpoolPostDescription" placeholder="Description"></textarea>
    <br>
    <br>
    <p>Your Pickup Range (click on your general area)</p>
    <div id="map" style="height:300px; width:300px"></div>
    <br>
    <select id="subject" name="subject" class="btn btn-danger">
      <option value="basketball">Basketball</option>
      <option value="mun">Model UN</option>
      <option value="deca">DECA</option>
      <option value="soccer">Soccer</option>
      <option value="track">Track</option>
      <option value="swimming">Swimming</option>
    </select>
    <p>Your Name</p>
    <input type = "text" id = "carpoolPostName" name = "carpoolPostName"><br>
    <br>
    <p>Your Email</p>
    <input type = "text" id = "carpoolPostEmail" name = "carpoolPostEmail">
    <br>
    <br>
    <p>Phone Number (optional)</p>
    <input type = "text" id = "carpoolPostPhone" name = "carpoolPostPhone">
    <button onclick="send_carpool()" class="btn btn-danger">Submit</button>    `
    mymap = L.map('map').setView([47.61341768915884, -122.03149390175979], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA'
    }).addTo(mymap);
    mymap.on('click', onMapClick);
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
    <select class="btn btn-danger" id = "tutorPostSubject" name = "tutorPostSubject">
      <option value="english">English</option>
      <option value="science">Science</option>
      <option value="math">Math</option>
      <option value="ss">Social Studies</option>
      <option value="cs">Computer Science</option>
      <option value="wl">World Language</option>
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
    <button onclick="send_tutor()" class="btn btn-danger">Submit</button>
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
    <p>Your Name</p>
    <input type="text" id="supplyPostName" name="supplyPostName" >
    <br>
    <br>

    <p>Your Email</p>
    <input type="text" id="supplyPostEmail" name="supplyPostEmail" >
    <br>
    <br>
    <p>Phone Number (optional)</p>
    <input type="text" id="supplyPostPhone" name="supplyPostPhone">
    <button onclick="send_supply()" class="btn btn-danger">Submit</button>
    `
  } else if(dropdown.value == "discussion") {
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
    <input type="text" id="questionPostName" name="questionPostName" placeholder="John Doe">
    <br>
    <br>
    <button onclick="send_question()" class="btn btn-danger">Submit</button>


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
    var subject = document.getElementById('subject').value
    location.href = "/submitpost?type=" + type + "&title=" + title + "&description=" + description + "&name=" + name + "&email=" + email + "&phone=" + phone + "&lat=" + lat + "&lng=" + lng + "&subject=" + subject

}

function send_tutor() {
  var type = dropdown.value
  var title = document.getElementById('tutorPostTitle').value
  var description = document.getElementById("tutorPostDescription").value
  var fee = document.getElementById('tutorPostFee').value
  var email = document.getElementById('tutorPostEmail').value
  var phone = document.getElementById('tutorPostPhone').value
  var subject = document.getElementById('tutorPostSubject').value
  location.href = "/submitpost?type=" + type + "&title=" + title + "&description=" + description + "&fee=" + fee + "&email=" + email + "&phone=" + phone + "&subject=" + subject
}

function send_supply() {
  var type = dropdown.value
  console.log(document.getElementById("supplyPostTitle"))
  var title = document.getElementById("supplyPostTitle").value
  var description = document.getElementById("supplyPostDescription").value
  var email = document.getElementById('supplyPostEmail').value
  var phone = document.getElementById('supplyPostPhone').value
  var name = document.getElementById('supplyPostName').value
  location.href = "/submitpost?type=" + type + "&title=" + title + "&description=" + description + "&email=" + email + "&phone=" + phone + "&name=" + name
}

function send_question() {
  var type = dropdown.value
  var title = document.getElementById("questionPostTitle").value
  var description = document.getElementById('questionPostDescription').value
  var name = document.getElementById('questionPostName').value
  location.href = "/submitpost?type=" + type + "&title=" + title + "&description=" + description + "&name=" + name
}

 function viewTutorPost(data) {
   $.get({
     url: "/getTutorPost?id=" + data,
     success: function(data, status){
         window._title = data.title
         window._subject = data.subject
         window._description = data.description
         window._fee = data.fee
         window._email = data.email
         window._phone = data.phone
         console.log(window._title)
         document.getElementById("column2").innerHTML = `
         <div>
         <h1 style="font-size: 50px">` + window._title + `</h1>
         <br>
         <p style="font-size: 25px">` + window._description + `</p>
         <br>
         <p style="font-size: 25px">Fee: $` + window._fee + ` per hour</p>
         </div>
         `
         document.getElementById("contactInfo").innerHTML = `<br>
            <p style="">Email: <a href="mailto: ` + window._email + `">`+ window._email +`</a><br><br>Phone Number: ` + window._phone + `</p>
         `
     }
   })
 }

function viewCarpoolPost(data) {
  $.get({
    url: "/getCarpoolPost?id=" + data,
    success: function(data, status){
        window._title = data.title
        window._name = data.name
        window._description = data.description
        window._email = data.email
        window._phone = data.phone
        window._lat = data.lat
        window._lng = data.lng
        console.log(window._title)
        document.getElementById("column2").innerHTML = `
        <div>
        <h1 style="font-size: 50px">` + window._title + `</h1>
        <br>
        <p style="font-size: 25px">` + window._description + `</p>
        <br>
        <p style="font-size: 25px">Driver: ` + window._name + `</p>
        </div>
        <div id="map" style="width:400px; height:400px"></div>
        `
        console.log(data)
        mymap = L.map('map').setView([window._lat, window._lng], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA'
        }).addTo(mymap);
        marker = new L.circle([window._lat, window._lng], {
          color: 'red',
          fill: 'f03',
          fillOpacity: 0.4,
          radius: 1300
        }).addTo(mymap);
        marker.bindPopup("Pickup Area").openPopup()
        document.getElementById("contactInfo").innerHTML = `<br>
           <p style="">Email: <a href="mailto: ` + window._email + `">`+ window._email +`</a><br><br>Phone Number: ` + window._phone + `</p>
        `
  }})
}
