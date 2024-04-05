const Node = {
  "id": "6527af93fa65c0f7",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select device profiles",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 940,
  "y": 2840,
  "wires": [
    [
      "84a1ce1aef2c0c44"
    ]
  ]
}

Node.template = `
SELECT * FROM {{global.metadataTablename.deviceprofile}}
`

module.exports = Node;