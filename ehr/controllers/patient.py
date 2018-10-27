# -*- coding: utf-8 -*-
from flask import Blueprint, request, jsonify, make_response
from flask_cors import cross_origin
import fhirclient.models.patient as p
import fhirclient.models.humanname as hn
import fhirclient.models.fhirdate as fd  # .FHIRDate as fhirdate
import fhirclient.models.address as addr
from datetime import datetime

from ehr import (
    app,
    db
)

patient_route = Blueprint(
    "patient_route",
    __name__,
    url_prefix="/Patient"
)


# @patient_route.route("/list", methods=["GET"])
# def patient_list():
#     result = db.engine.execute("select * from T_Patients limit 10")
#     plist = []
#     for row in result:
#         patient = p.Patient({'id': row['pat_id']})
#
#         name = hn.HumanName()
#         name.given = [row['pat_first']]
#         name.family = row['pat_last']
#         patient.name = [name]
#
#         address = addr.Address()
#         address.city = row['pat_city']
#         address.state = row['pat_state']
#         address.postalCode = row['pat_zip']
#         address.district = row['pat_address']
#         patient.address = [address]
#
#         patient.gender = row['pat_gender']
#         patient.birthDate = fd.FHIRDate(
#             datetime.strftime(row['pat_birthdate'], "%Y-%m-%d"))
#         # patient.maritalStatus = row['pat_marital']
#         plist.append(patient.as_json())
#     return jsonify(result=plist)

@patient_route.route("/list", methods=["GET"])
def patient_list():
    start = request.args.get('start', 0)
    length = request.args.get('length', 100)

    start = int(start)
    length = int(length)

    count = db.engine.execute("select count(*) from T_Patients").scalar()
    result = db.engine.execute("select * from T_Patients limit %d, %d" % (start, length))
    plist = []
    total = count

    for row in result:
        patient = p.Patient({'id': row['pat_id']})

        name = hn.HumanName()
        name.given = [row['pat_first']]
        name.family = row['pat_last']
        patient.name = [name]

        address = addr.Address()
        address.city = row['pat_city']
        address.state = row['pat_state']
        address.postalCode = row['pat_zip']
        address.district = row['pat_address']
        patient.address = [address]

        patient.gender = row['pat_gender']
        patient.birthDate = fd.FHIRDate(
            datetime.strftime(row['pat_birthdate'], "%Y-%m-%d"))
        # patient.maritalStatus = row['pat_marital']
        plist.append(patient.as_json())

    return jsonify(result=plist, total=total)


@patient_route.route("/<id>", methods=["GET"])
def patient(id):
    # https://{FHIR Base URL}/Patient/{id}?
    # name={name}&
    # family={family name}&
    # gender={gender}&
    # _format=json

    # TODO: query params
    name = request.args.get('name', None)
    family = request.args.get('family', None)
    gender = request.args.get('gender', None)

    # TODO: connect to database to search patient

    result = db.engine.execute("select * from T_Patients limit 1")
    names = []
    for row in result:
        patient = p.Patient({'id': row['pat_id']})
        name = hn.HumanName()
        name.given = [row['pat_first']]
        name.family = row['pat_last']
        patient.name = [name]

        address = addr.Address()
        address.city = row['pat_city']
        address.state = row['pat_state']
        address.postalCode = row['pat_zip']
        address.district = row['pat_address']
        patient.address = [address]

        patient.gender = row['pat_gender']
        patient.birthDate = fd.FHIRDate(
            datetime.strftime(row['pat_birthdate'], "%Y-%m-%d"))
        patient.maritalStatus = row['pat_marital']
    return jsonify(result=patient.as_json())
