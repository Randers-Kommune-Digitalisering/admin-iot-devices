const Node = {
  "id": "cc1acf0a83433594",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende målepunkt-metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 410,
  "y": 1180,
  "wires": [
    [
      "05d3132007494733"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maalepunkt_metadata_tablename}} WHERE maalernummer = '{{maaler.nummer}}';
`

module.exports = Node;