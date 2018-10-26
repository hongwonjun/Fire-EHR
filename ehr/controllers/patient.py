# -*- coding: utf-8 -*-
from flask import Blueprint, request, jsonify, make_response
from flask_cors import cross_origin
import fhirclient.models.patient as p
import fhirclient.models.humanname as hn

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

    # TODO: query params
    # name = request.args.get('name', None)

    # TODO: connect to database to search patient
    result = db.engine.execute("SELECT 1")
    names = []
    for row in result:
        pass

    # dummy data
    patient = p.Patient({'id': str(id)})
    name = hn.HumanName()
    name.given = ['Peter']
    name.family = 'Parker'
    patient.name = [name]
    print(patient.as_json())

    return jsonify(result=patient.as_json())
