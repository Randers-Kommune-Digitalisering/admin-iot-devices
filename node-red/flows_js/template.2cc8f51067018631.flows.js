const Node = {
  "id": "2cc8f51067018631",
  "type": "template",
  "z": "5f6ef472b7d9e1e9",
  "name": "Forespørgsel ↓\\n Hent målere til eksport",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 600,
  "y": 520,
  "wires": [
    [
      "a9133e3aafe269f8"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}}
`

module.exports = Node;