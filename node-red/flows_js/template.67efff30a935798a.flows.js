const Node = {
  "id": "67efff30a935798a",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "d": true,
  "name": "Select device \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 230,
  "y": 700,
  "wires": [
    [
      "00152d6dbca958e1"
    ]
  ]
}

Node.template = `
SELECT *
FROM {{global.metadataTablename.maaler}}    
WHERE uid = {{uid}}
`

module.exports = Node;