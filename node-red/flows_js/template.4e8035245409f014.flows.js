const Node = {
  "id": "4e8035245409f014",
  "type": "template",
  "z": "e4e3eef16c2dc327",
  "name": "Forespørgsel ↓\\n Tjek om måler eksisterer \\n i metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 580,
  "wires": [
    [
      "1e4757bc3804abc1"
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