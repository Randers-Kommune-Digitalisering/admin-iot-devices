const Node = {
  "id": "8672f0b497bff575",
  "type": "template",
  "z": "6f89a22d2f227f45",
  "name": "Forespørgsel ↓\\n Opdater metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 1560,
  "wires": [
    [
      "cb10662b0d26192c"
    ]
  ]
}

Node.template = `
UPDATE {{flow.metadata_tablename}} SET last_observation = '{{data.observedAt}}' WHERE uid = '{{data.id}}';
`

module.exports = Node;