const Node = {
  "id": "10aba16c20afe8d3",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
  "name": "Select data \\n since lastExport",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 860,
  "y": 2920,
  "wires": [
    [
      "3e75450869d4409e"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    {{payload.dataTablename}}
WHERE
    type = '{{payload.propertyName}}'
AND {{{observedAtQuery}}}
LIMIT 5000
`

module.exports = Node;