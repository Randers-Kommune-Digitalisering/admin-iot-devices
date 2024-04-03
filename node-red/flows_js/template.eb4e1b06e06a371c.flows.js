const Node = {
  "id": "eb4e1b06e06a371c",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende måler-metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 1080,
  "wires": [
    [
      "35c414292ba555b1"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE nummer = '{{deviceId}}';
`

module.exports = Node;