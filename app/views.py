from app import app
from flask import request, session, jsonify, render_template

discussionPosts = [{"header": " who r u", "author": "Sarthak Lodha"}]
schoolSupplyPosts = []
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
    return render_template('home.html', discussionPosts=discussionPosts)


@app.route('/submitpost')
def submitpost():
    form = request.args
    post = {
        "author": form.get('name'),
        "description": form.get('description'),
        "phone": form.get('phone'),
        "email": form.get('email'),
        "title": form.get("title"),
        "type": form.get("type")
    }
    if post["type"] == "carpool":
        carpoolPosts.append(post)
    if post["type"] == "tutor":
        tutoringPosts.append(post)
    if post["type"] == "supplies":
        schoolSupplyPosts.append(post)
    if post["type"] == "discussion":
        discussionPosts.append(post)
    print(carpoolPosts)
    print(post)
    return "Success"

@app.route('/viewTutorsSubjects')
def viewTutors():
    return render_template("viewTutorsSubjects.html")

@app.route('/viewCarpoolSubjects')
def viewCarpools():
    return render_template("viewCarpoolSubjects.html")
