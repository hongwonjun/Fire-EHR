# -*- coding: utf-8 -*-
# import os
# import sys
import json
# import random
# import hashlib

# import pandas as pd
# import numpy as np

# from collections import defaultdict
# from datetime import datetime
from flask import Blueprint, request, jsonify, make_response
from flask_cors import cross_origin
import fhirclient.models.patient as p
import fhirclient.models.humanname as hn
# import sqlalchemy
# from sqlalchemy import *
# from sqlalchemy.schema import *

from ehr import (
    app,
    db
)

patient_route = Blueprint(
    "patient_route",
    __name__,
    url_prefix="/Patient"
)


@patient_route.route("/<id>", methods=["GET"])
def patient(id):
    # https://{FHIR Base URL}/Patient/{id}?
    # name={name}&
    # family={family name}&
    # gender={gender}&
    # _format=json

    # name = request.args.get('name', None)

    # TODO: connect to database to search patient
    result = db.engine.execute("SELECT 1")
    names = []
    for row in result:
        pass

    patient = p.Patient({'id': str(id)})
    name = hn.HumanName()
    name.given = ['Peter']
    name.family = 'Parker'
    patient.name = [name]
    print(patient.as_json())

    return jsonify(result=patient.as_json())
