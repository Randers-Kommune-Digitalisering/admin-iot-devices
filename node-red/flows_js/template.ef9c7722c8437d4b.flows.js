const Node = {
  "id": "ef9c7722c8437d4b",
  "type": "template",
  "z": "bd0288d62c2263f6",
  "name": "Forespørgsel ↓\\n Tjek om måler eksisterer \\n i metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 520,
  "wires": [
    [
      "32567513d46774b4"
    ]
  ]
}

Node.template = `
SELECT
    lastObservation
FROM {{global.metadataTablename.maaler}}
WHERE deviceEui = '{{data.deviceEui}}'
ORDER BY lastObservation DESC LIMIT 1
`

module.exports = Node;