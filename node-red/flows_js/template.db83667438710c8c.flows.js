const Node = {
  "id": "db83667438710c8c",
  "type": "template",
  "z": "1b1f52cac1d78ec2",
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
DROP TABLE {{global.metadataTablename.lokation}}
`

module.exports = Node;