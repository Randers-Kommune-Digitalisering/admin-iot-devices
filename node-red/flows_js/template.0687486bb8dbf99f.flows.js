const Node = {
  "id": "0687486bb8dbf99f",
  "type": "template",
  "z": "e4e3eef16c2dc327",
  "name": "Forespørgsel ↓\\n Opdater device metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 1600,
  "wires": [
    [
      "5ce966c493edb4ff"
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