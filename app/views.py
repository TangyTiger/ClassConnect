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

@app.route('/home', methods=['GET'])
def homepg():
    return render_template('home.html', discussionPosts=discussionPosts)