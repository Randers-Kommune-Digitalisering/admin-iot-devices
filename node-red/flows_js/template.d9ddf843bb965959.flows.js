const Node = {
  "id": "d9ddf843bb965959",
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
  "y": 220,
  "wires": [
    []
  ]
}

Node.template = `
DROP TABLE {{global.metadataTablename.os2status}}
`

module.exports = Node;