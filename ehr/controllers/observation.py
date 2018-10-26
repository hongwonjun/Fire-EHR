# -*- coding: utf-8 -*-
from flask import Blueprint, request, jsonify, make_response
from flask_cors import cross_origin
import fhirclient.models.observation as ob
import fhirclient.models.humanname as hn
import json
import io
import os

from ehr import (
    app,
    db
)

observation_route = Blueprint(
    "observation_route",
    __name__,
    url_prefix="/Observation"
)


@observation_route.route("/<id>", methods=["GET"])
def patient(id):
    # https://{FHIR Base URL}/Observation?
    # patient={Patient Id}&
    # category={category}&
    # code={code1,code2,code3...}&
    # date={date}&
    # _format=json

    # TODO: query params
    # patient_id = request.args.get('patient', None)

    # TODO: connect to database to search patient
    result = db.engine.execute("SELECT 1")
    names = []
    for row in result:
        pass

    # dummy data
    with open(os.path.join(app.config['FHIR_RESOURCES'], 'observation-example-body-height.json')) as f:
        data = json.load(f)
    obs = ob.Observation(data)
    # TODO: update observation resource
    print(obs.as_json())

    return jsonify(result=obs.as_json())
