const Node = {
  "id": "d4702eb349062715",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select alle devices",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 250,
  "y": 520,
  "wires": [
    []
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE isTemplate = false
INNER JOIN 
`

module.exports = Node;