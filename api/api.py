from flask import Flask
import json

with open('movie_metadata.json') as movies:
    movie_data = json.load(movies)

with open('theater_showtimes.json') as theaters:
    theater_data = json.load(theaters)

app = Flask(__name__)

@app.route('/api/movies', methods=['GET'])
def movies():
    return {'data': movie_data}

@app.route('/api/theaters', methods=['GET'])
def theaters():
    return {'data': theater_data}