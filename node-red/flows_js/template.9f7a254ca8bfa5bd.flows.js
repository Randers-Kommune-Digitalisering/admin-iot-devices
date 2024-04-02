const Node = {
  "id": "9f7a254ca8bfa5bd",
  "type": "template",
  "z": "d0465df3f1def3b2",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende måler-metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 200,
  "wires": [
    [
      "1c9a0a64dc425fc6"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE nummer = '{{sensorId}}';
`

module.exports = Node;