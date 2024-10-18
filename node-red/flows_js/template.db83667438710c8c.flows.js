const Node = {
  "id": "db83667438710c8c",
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
  "y": 100,
  "wires": [
    []
  ]
}

Node.template = `
DROP TABLE {{global.metadataTablename.lokation}}
`

module.exports = Node;