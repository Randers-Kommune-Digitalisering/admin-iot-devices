const Node = {
  "id": "f45d502f925d5d93",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select template \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 280,
  "y": 1240,
  "wires": [
    [
      "14229dd52e5e33ab"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE isTemplate = true AND uid = '{{templateUid}}'
`

module.exports = Node;