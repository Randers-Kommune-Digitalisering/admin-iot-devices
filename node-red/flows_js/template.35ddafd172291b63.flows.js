const Node = {
  "id": "35ddafd172291b63",
  "type": "template",
  "z": "bd0288d62c2263f6",
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
      "4e909629542ee5f8"
    ]
  ]
}

Node.template = `
UPDATE {{flow.metadata_tablename}} SET last_observation = '{{data.observedAt}}' WHERE uid = '{{data.id}}';
`

module.exports = Node;