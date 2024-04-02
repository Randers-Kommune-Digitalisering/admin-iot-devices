const Node = {
  "id": "37ade5b150da0ee7",
  "type": "template",
  "z": "d0465df3f1def3b2",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende målepunkt-metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 430,
  "y": 320,
  "wires": [
    [
      "d588315122ccb81f"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maalepunkt_metadata_tablename}} WHERE maalernummer = '{{maaler.nummer}}';
`

module.exports = Node;