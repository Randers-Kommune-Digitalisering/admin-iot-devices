const Node = {
  "id": "588900692d5adec8",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "943398ac0aaf500a",
  "name": "Select dekodere",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 220,
  "y": 3160,
  "wires": [
    [
      "ea295354e6ab8115"
    ]
  ]
}

Node.template = `
SELECT * FROM {{global.metadataTablename.decoder}}
`

module.exports = Node;