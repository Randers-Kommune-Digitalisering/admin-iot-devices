const Node = {
  "id": "2288929291d4d6c2",
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
  "y": 180,
  "wires": [
    []
  ]
}

Node.template = `
DROP TABLE {{global.metadataTablename.deviceprofile}}
`

module.exports = Node;