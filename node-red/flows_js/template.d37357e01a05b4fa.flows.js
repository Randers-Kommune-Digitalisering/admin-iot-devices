const Node = {
  "id": "d37357e01a05b4fa",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select alle templates",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 1280,
  "wires": [
    [
      "976ba4a17af98cba"
    ]
  ]
}

Node.template = `
SELECT * FROM {{global.metadataTablename.maaler}} WHERE isTemplate = true
`

module.exports = Node;