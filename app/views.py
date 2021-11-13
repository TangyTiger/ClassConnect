from app import app
from flask import request, session, jsonify, render_template, redirect

discussionPosts = [{"header": " who r u", "author": "Sarthak Lodha"}]
schoolSupplyPosts = [{"header": "Need screwdriver", "author": "Aditya Shah"}]
carpoolPosts = []
tutoringPosts = []

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
        "phone": form.get('phone'),
        "email": form.get('email'),
        "title": form.get("title"),
        "type": form.get("type")
    }
    if post["type"] == "carpool":
        post["name"] = form.get("name")
        carpoolPosts.append(post)
        print(carpoolPosts)
    if post["type"] == "tutor":
        post["fee"] = form.get("fee")
        post["subject"] = form.get("subject")
        tutoringPosts.append(post)
        print(tutoringPosts)
    if post["type"] == "supplies":
        schoolSupplyPosts.append(post)
    if post["type"] == "discussion":
        discussionPosts.append(post)
    print(post)
    return redirect("/home")

@app.route('/viewTutorsSubjects')
def viewTutors():
    return render_template("viewTutorsSubjects.html")

@app.route('/viewCarpoolSubjects')
def viewCarpools():
    return render_template("viewCarpoolSubjects.html")
