const Node = {
  "id": "845250f709c0ef1e",
  "type": "template",
  "z": "bd0288d62c2263f6",
  "name": "Forespørgsel ↓\\n Opdater målerens dateFirstUsed",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 630,
  "y": 840,
  "wires": [
    [
      "626a5393bcb3d6fd"
    ]
  ]
}

Node.template = `
UPDATE {{global.metadataTablename.maaler}} SET 
    dateFirstUsed = CURRENT_TIMESTAMP
WHERE deviceEui = '{{data.deviceEui}}'
`

module.exports = Node;