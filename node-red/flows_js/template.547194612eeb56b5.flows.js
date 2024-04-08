const Node = {
  "id": "547194612eeb56b5",
  "type": "template",
  "z": "1b1f52cac1d78ec2",
  "d": true,
  "name": "DROP",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 140,
  "wires": [
    [
      "1f61fb9cdab32b2d"
    ]
  ]
}

Node.template = `
DROP TABLE {{global.metadataTablename.decoder}}
`

module.exports = Node;