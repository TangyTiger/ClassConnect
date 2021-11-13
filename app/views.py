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
    print(post)
