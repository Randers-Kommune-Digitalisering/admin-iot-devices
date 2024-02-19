const Node = {
  "id": "0c1cbf5b4081e60e",
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
  "y": 2680,
  "wires": [
    [
      "5fab0466e0bc82b8"
    ]
  ]
}

Node.template = `
DROP TABLE energykey_maalepunkt_metadata
`

module.exports = Node;