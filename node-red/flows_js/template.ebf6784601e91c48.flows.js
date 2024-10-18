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
  "x": 530,
  "y": 2500,
  "wires": [
    [
      "ae87b0d2d761e31b"
    ]
  ]
}

Node.template = `
SELECT DISTINCT
    type
FROM {{payload.dataTablename}}
`

module.exports = Node;