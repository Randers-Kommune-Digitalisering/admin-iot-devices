const Node = {
  "id": "7c50f6e487f4c0fc",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Select device (msg.devEui)",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 940,
  "y": 540,
  "wires": [
    [
      "dd283ee9761c4b49"
    ]
  ]
}

Node.template = `
SELECT deviceEui FROM {{global.metadataTablename.maaler}} WHERE deviceEui = '{{devEui}}'
`

module.exports = Node;