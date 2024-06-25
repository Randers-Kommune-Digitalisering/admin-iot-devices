const Node = {
  "id": "cefc5f1bab6add25",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Select template name",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1340,
  "y": 840,
  "wires": [
    [
      "5f9b169a90844e71"
    ]
  ]
}

Node.template = `
SELECT
    name
FROM 
    {{global.metadataTablename.maaler}}
WHERE
    isTemplate = 1
AND uid = {{templateUid}}
`

module.exports = Node;