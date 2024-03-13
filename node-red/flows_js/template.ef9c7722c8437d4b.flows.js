const Node = {
  "id": "ef9c7722c8437d4b",
  "type": "template",
  "z": "bd0288d62c2263f6",
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
      "20c08bb0215dca1e"
    ]
  ]
}

Node.template = `
SELECT last_observation FROM {{flow.metadata_tablename}}
WHERE uid = '{{data.id}}' ORDER BY last_observation DESC LIMIT 1;
`

module.exports = Node;