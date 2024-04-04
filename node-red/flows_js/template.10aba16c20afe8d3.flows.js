const Node = {
  "id": "10aba16c20afe8d3",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select data \\n since lastExport",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 860,
  "y": 2600,
  "wires": [
    [
      "df9cefd4fdbd07f2"
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
AND observedAt > '{{payload.lastExport}}'
`

module.exports = Node;