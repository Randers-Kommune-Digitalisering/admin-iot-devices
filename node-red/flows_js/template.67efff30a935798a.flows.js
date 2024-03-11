const Node = {
  "id": "67efff30a935798a",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select device \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 270,
  "y": 680,
  "wires": [
    [
      "00152d6dbca958e1"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE uid = {{uid}}
`

module.exports = Node;