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
  "x": 470,
  "y": 20,
  "wires": [
    [
      "a07eb5df7f403569"
    ]
  ]
}

Node.template = `
DROP TABLE {{global.metadataTablename.maaler}}
`

module.exports = Node;