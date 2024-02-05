const Node = {
  "id": "cc14923ccb54abc0",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 590,
  "y": 2160,
  "wires": [
    [
      "622c3464cfe1344d"
    ]
  ]
}

Node.template = `
DROP TABLE energykey_maaler_metadata
`

module.exports = Node;