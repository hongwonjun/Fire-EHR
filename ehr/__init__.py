# -*- coding: utf-8 -*-
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_compress import Compress

app = Flask(__name__)
app.config.from_pyfile('ehr.cfg')
app.debug = True

app.config['APP_ROOT'] = os.path.abspath(os.path.dirname(__file__))

app.config['FHIR_RESOURCES'] = os.path.join(
    app.config['APP_ROOT'], '../resources')
# Compress text, css, xml, json responeses
Compress(app)

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = app.config['SQLALCHEMY_DATABASE_URI']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# route Cross Origin Resource Sharing (CORS)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# routes
from ehr.controllers.patient import patient_route
from ehr.controllers.observation import observation_route

# routes cluster
app.register_blueprint(patient_route)
app.register_blueprint(observation_route)

import ehr.route
