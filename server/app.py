from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__, static_folder='../client/dist/assets',
            template_folder='../client/dist')

CORS(app)


@app.route('/')
def index():
    return render_template("index.html")
