const Node = {
  "id": "1a3f7677efc4ab37",
  "type": "template",
  "z": "1b1f52cac1d78ec2",
  "name": "DROP",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 710,
  "y": 260,
  "wires": [
    [
      "1f61fb9cdab32b2d"
    ]
  ]
}

Node.template = `
DROP TABLE iot_data_1234567890987654
`

module.exports = Node;