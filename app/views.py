from app import app
from flask import request, session, jsonify, render_template, redirect

discussionPosts = [
    {"title": " who r u", "name": "Sarthak Lodha", "id": 1, "replies": ["test", "test2"]},
    {"title": " test num 2", "name": "aditya shah", "id": 2},
    {"title": "test number 3", "name": "Sarthak Lodha", "id": 3},
    {"title": " who r u", "name": "Sarthak Lodha", "id": 4}
]

schoolSupplyPosts = [
    {
        "title": "Need screwdriver",
        "description": "jioadfjilo jioad aoegjg oszh h a;ofiui t paiwfr hioas",
        "name": "Aditya Shah",
        "id": 5,
        "email": "adityashah@adityashah.com",
        "phone": 1028561933
    }
]
carpoolPosts = []
tutoringPosts = [
    {
        "title": "Math Help",
        "description": "some stuff here",
        "email": "asdf@gmail.com",
        "fee": "18",
        "phone": 1234567890, "id": 6,
        "subject": "math"
    },
    {
        "title": "Science Help",
        "description": "a description",
        "email": "jdoe@gmail.com",
        "fee": "20",
        "phone": 1029384756, "id": 7,
        "subject": "science"
    }
]
preid = 7


@app.route('/post', methods=['GET'])
def postpg():
    return render_template('post.html')


@app.route('/signup', methods=['GET'])
def signuppg():
    return render_template('signup.html')


@app.route('/signin', methods=['GET'])
def signinpg():
    return render_template('signin.html')


@app.route('/home', methods=['GET'])
def homepg():
    return render_template('home.html', discussionPosts=discussionPosts, supplyPosts=schoolSupplyPosts)

@app.route('/fullScreenHome')
def fullscrnhomepg():
    return render_template('fullScreenHome.html', discussionPosts=discussionPosts, supplyPosts=schoolSupplyPosts)

@app.route('/submitpost')
def submitpost():
    global preid
    preid += 1
    form = request.args
    post = {
        "description": form.get('description'),
        "title": form.get("title"),
        "type": form.get("type"),
        "name": form.get("name"),
        "id": preid
    }
    if post["type"] == "carpool":
        post["name"] = form.get("name")
        post["phone"] = form.get("phone")
        post["email"] = form.get("email")
        post['lat'] = form.get('lat')
        post['lng'] = form.get('lng')
        post['subject'] = form.get('subject')
        carpoolPosts.append(post)
        print(carpoolPosts)
    if post["type"] == "tutor":
        post["email"] = form.get("email")
        post["fee"] = form.get("fee")
        post["subject"] = form.get("subject")
        post["phone"] = form.get("phone")
        tutoringPosts.append(post)
        print(tutoringPosts)
    if post["type"] == "supplies":
        post["email"] = form.get("email")
        post["phone"] = form.get("phone")
        schoolSupplyPosts.append(post)
    if post["type"] == "discussion":
        discussionPosts.append(post)
    print(post)
    return redirect("/home")


@app.route('/viewTutorsSubjects')
def viewtutors():
    return render_template("viewTutorsSubjects.html")


@app.route('/viewCarpoolSubjects')
def viewcarpools():
    return render_template("viewCarpoolSubjects.html")


@app.route('/tutorViewing')
def viewtutorslist():
    subject = request.args.get("subject")
    filteredSubjects = []
    for i in tutoringPosts:
        if i["subject"] == subject:
            filteredSubjects.append(i)
    return render_template("tutorViewing.html", tutorPosts=filteredSubjects)


@app.route('/getTutorPost')
def getTutorPost():
    data = int(request.args.get("id"))
    print(data)
    for i in tutoringPosts:
        if i["id"] == data:
            return jsonify(i)


@app.route('/getCarpoolPost')
def getCarpoolPost():
    data = int(request.args.get("id"))
    for i in carpoolPosts:
        if i["id"] == data:
            return jsonify(i)


@app.route('/discussionsThread')
def answerQuestions():
    question = int(request.args["id"])
    for i in discussionPosts:
        print(question)
        if i["id"] == question:
            return render_template("discussionThreads.html", post=i)


@app.route('/viewAllDiscussions')
def viewAllDiscussion():
    return render_template("viewAllDiscussions.html", discussionPosts=discussionPosts)


@app.route('/viewAllSupplies')
def viewAllSupplies():
    return render_template("viewAllSupplies.html", supplies=schoolSupplyPosts)


@app.route('/supplyRespond')
def supplyRespond():
    supply = int(request.args.get("id"))
    for i in schoolSupplyPosts:
        if i["id"] == supply:
            return render_template("supplyRespond.html", post=i)


@app.route('/sendReply')
def sendReply():
    reply = request.args.get("reply")
    id = int(request.args.get("id"))
    for i in discussionPosts:
        if i["id"] == id:
            i['replies'].insert(0, reply)
    return redirect("/discussionsThread?id=" + str(id))


@app.route('/carpoolViewing')
def viewAllCarpools():
    subject = request.args.get("subject")
    filteredSubjects = []
    for i in carpoolPosts:
        if i["subject"] == subject:
            filteredSubjects.append(i)
    return render_template('carpoolViewing.html', tutorPosts=filteredSubjects)
