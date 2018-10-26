# -*- coding: utf-8 -*-
from flask import request, jsonify, make_response
from flask_cors import cross_origin
from ehr import app


@app.route("/")
def hello():
    return "Fire-EHR!"
