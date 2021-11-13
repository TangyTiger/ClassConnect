from app import app
from flask import request, session, jsonify, render_template


@app.route('/posts', methods=['GET'])
def postpg():
    return render_template('post.html')