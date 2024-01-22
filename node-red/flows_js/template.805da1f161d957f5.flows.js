const Node = {
  "id": "805da1f161d957f5",
  "type": "template",
  "z": "6f89a22d2f227f45",
  "name": "Forespørgsel ↓\\n Tjek om sensor eksisterer \\n i metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 720,
  "wires": [
    [
      "ae5e294ddc16378f"
    ]
  ]
}

Node.template = `
SELECT last_observation FROM {{flow.metadata_tablename}}
WHERE uid = '{{data.id}}' ORDER BY last_observation DESC LIMIT 1;
`

module.exports = Node;