const Node = {
  "id": "ad858d75c34662a7",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "DROP",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 790,
  "y": 120,
  "wires": [
    [
      "1f61fb9cdab32b2d"
    ]
  ]
}

Node.template = `
DROP TABLE {{flow.maalepunkt_metadata_tablename}};
`

module.exports = Node;