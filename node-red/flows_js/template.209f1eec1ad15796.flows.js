const Node = {
  "id": "209f1eec1ad15796",
  "type": "template",
  "z": "1b1f52cac1d78ec2",
  "name": "DROP",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 260,
  "wires": [
    [
      "1f61fb9cdab32b2d"
    ]
  ]
}

Node.template = `
DROP TABLE {{global.metadataTablename.maaler}};
`

module.exports = Node;