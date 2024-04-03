const Node = {
  "id": "b31a1ed434826951",
  "type": "template",
  "z": "5f6ef472b7d9e1e9",
  "name": "Forespørgsel ↓\\n Eksisterer dataeksport metadata for device?",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 590,
  "y": 680,
  "wires": [
    [
      "af1c9ccbddc7c28b"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.metadata_tablename}} WHERE maalernummer = '{{maaler.nummer}}'
`

module.exports = Node;