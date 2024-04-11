const Node = {
  "id": "ebf6784601e91c48",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "d3309108f1a755b6",
  "name": "Select types",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 2360,
  "wires": [
    [
      "87c059c5de65236a"
    ]
  ]
}

Node.template = `
SELECT DISTINCT
    type
FROM {{payload.dataTablename}}
`

module.exports = Node;