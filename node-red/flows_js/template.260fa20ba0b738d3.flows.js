const Node = {
  "id": "260fa20ba0b738d3",
  "type": "template",
  "z": "31eb0ab05cfa21a8",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende måler-metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 280,
  "y": 140,
  "wires": [
    [
      "d555064e39148d02"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE nummer = '{{sensorId}}';
`

module.exports = Node;