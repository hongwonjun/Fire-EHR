# Fire-EHR

## ehr

- virtualenv & install packages

```
virtualenv -p python3.6 venv
source venv/bin/activate
pip install -r requirements.txt
```

- create cfg file and edit it

```
cp ehr/ehr.default.cfg ehr/ehr.cfg
```

- run server

```
python run.py
```

## viz

- install nvm & node
  https://github.com/creationix/nvm

- create cfg file and edit it

```
cp viz/config.default.json viz/config.json
```

- run viz

```
cd viz
yarn
yarn run dev
```

## Fhir model building

- https://github.com/smart-on-fhir/client-py#data-model-use
