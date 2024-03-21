const Node = {
  "id": "8f32174591048747",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select template",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1020,
  "y": 620,
  "wires": [
    [
      "03479a37810184ed"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM {{global.metadataTablename.maaler}}
WHERE isTemplate = true AND uid = {{payload.defaultValuesTemplateUid}}
`

module.exports = Node;