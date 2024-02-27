const Node = {
  "id": "1cf0f398edca97a1",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 500,
  "y": 1660,
  "wires": [
    [
      "35a54fb4e02ef5cb"
    ]
  ]
}

Node.template = `
SELECT * FROM energykey_maalepunkt_metadata
`

module.exports = Node;