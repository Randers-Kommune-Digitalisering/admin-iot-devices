const Node = {
  "id": "fc3a3cf4f8ec5b86",
  "type": "template",
  "z": "31eb0ab05cfa21a8",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende målepunkt-metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 260,
  "wires": [
    [
      "9d3a030fb48bed0d"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maalepunkt_metadata_tablename}} WHERE maalernummer = '{{maaler.nummer}}';
`

module.exports = Node;