const Node = {
  "id": "35ddafd172291b63",
  "type": "template",
  "z": "bd0288d62c2263f6",
  "name": "Forespørgsel ↓\\n Opdater device metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 1540,
  "wires": [
    [
      "3e08b0a08f297c3b"
    ]
  ]
}

Node.template = `
UPDATE {{global.metadataTablename.maaler}} SET
    lastObservation = '{{data.observedAt}}',
    dataTablename = '{{data.tablename}}',
    rssi = {{data.rssi}},
    batteryLevel = {{data.batteryLevel}}
WHERE deviceEui = '{{data.deviceEui}}'
`

module.exports = Node;