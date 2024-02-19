const Node = {
  "id": "63559d3c8585ad56",
  "type": "template",
  "z": "330fa4345482a521",
  "name": "Forespørgsel ↓\\n Træk tabeldata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 180,
  "wires": [
    [
      "4dc3133638c6dc52"
    ]
  ]
}

Node.template = `
SHOW TABLES
`

module.exports = Node;