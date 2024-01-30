const Node = {
  "id": "63559d3c8585ad56",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Træk tabeldata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
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