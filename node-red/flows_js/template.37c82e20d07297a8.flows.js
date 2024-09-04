const Node = {
  "id": "37c82e20d07297a8",
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
  "x": 710,
  "y": 240,
  "wires": [
    [
      "1f61fb9cdab32b2d"
    ]
  ]
}

Node.template = `
DROP TABLE iot_data_0234567890987654
`

module.exports = Node;