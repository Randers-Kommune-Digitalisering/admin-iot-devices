const Node = {
  "id": "de01b8a11cb6d897",
  "type": "template",
  "z": "e4e3eef16c2dc327",
  "name": "Forespørgsel ↓\\n Opdater målerens dateFirstUsed",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 610,
  "y": 900,
  "wires": [
    [
      "2daf09c855397c42"
    ]
  ]
}

Node.template = `
UPDATE {{global.metadataTablename.maaler}} SET 
    dateFirstUsed = CURRENT_TIMESTAMP
WHERE deviceEui = '{{data.deviceEui}}'
`

module.exports = Node;