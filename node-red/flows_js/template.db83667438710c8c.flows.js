const Node = {
  "id": "db83667438710c8c",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "DROP",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 160,
  "wires": [
    [
      "1f61fb9cdab32b2d"
    ]
  ]
}

Node.template = `
DROP TABLE {{flow.lokation_metadata_tablename}};
`

module.exports = Node;