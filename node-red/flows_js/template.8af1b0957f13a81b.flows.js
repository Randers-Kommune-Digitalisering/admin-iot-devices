const Node = {
  "id": "8af1b0957f13a81b",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 200,
  "y": 400,
  "wires": [
    [
      "8ab1c4421f6cc48b"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE nummer = '{{maaler.nummer}}'
`

module.exports = Node;