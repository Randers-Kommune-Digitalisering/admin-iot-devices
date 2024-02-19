const Node = {
  "id": "5907e92efad911d1",
  "type": "template",
  "z": "5f6ef472b7d9e1e9",
  "name": "Forespørgsel ↓\\n Opdater tidspunkt for dataeksport",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 620,
  "y": 900,
  "wires": [
    [
      "db89090407e65909"
    ]
  ]
}

Node.template = `
UPDATE {{flow.metadata_tablename}} SET lastPull = NOW() WHERE maalernummer = '{{maaler.nummer}}'
`

module.exports = Node;