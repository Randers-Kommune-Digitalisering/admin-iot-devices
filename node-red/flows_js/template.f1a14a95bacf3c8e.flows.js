const Node = {
  "id": "f1a14a95bacf3c8e",
  "type": "template",
  "z": "31eb0ab05cfa21a8",
  "d": true,
  "name": "Forespørgsel ↓\\n Hent data for målepunkt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 730,
  "y": 300,
  "wires": [
    [
      "8398ebee807d031f"
    ]
  ]
}

Node.template = `
SELECT DISTINCT
    *
FROM
    {{measurementPoint.dataTablename}}
WHERE
    type = '{{measurementPoint.propertyName}}'
AND observedAt > '{{measurementPoint.lastExport}}'
`

module.exports = Node;