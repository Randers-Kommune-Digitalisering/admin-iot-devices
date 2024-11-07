const Node = {
  "id": "6527af93fa65c0f7",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "943398ac0aaf500a",
  "name": "Select device profiles",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 940,
  "y": 3160,
  "wires": [
    [
      "41a72e9957c5dd2e"
    ]
  ]
}

Node.template = `
SELECT * FROM {{global.metadataTablename.deviceprofile}}
`

module.exports = Node;