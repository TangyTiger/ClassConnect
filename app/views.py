from app import app
from flask import request, session, jsonify, render_template, redirect

discussionPosts = [{"title": " who r u", "name": "Sarthak Lodha", "id": 1}]
schoolSupplyPosts = [{"title": "Need screwdriver", "name": "Aditya Shah"}]
carpoolPosts = []
tutoringPosts = [{"title": "Math Help"}, {"title": "Science Help"}]


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


@app.route('/submitpost')
def submitpost():
    form = request.args
    post = {
        "description": form.get('description'),
        "title": form.get("title"),
        "type": form.get("type"),
        "name": form.get("name")
    }
    if post["type"] == "carpool":
        post["name"] = form.get("name")
        post["phone"] = form.get("phone")
        post["email"] = form.get("email")
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
        filteredSubjects.append(i)
    return render_template("tutorViewing.html", tutorPosts=filteredSubjects)
