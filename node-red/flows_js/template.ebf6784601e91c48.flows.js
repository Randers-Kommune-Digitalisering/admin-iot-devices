const Node = {
  "id": "ebf6784601e91c48",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select types \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 2240,
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