const Node = {
  "id": "70b4f531e6e2eff3",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
  "name": "Select data (limit 1)",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 870,
  "y": 2780,
  "wires": [
    [
      "4fbf9ac9c0916779"
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
ORDER BY
    observedAt DESC
LIMIT 1
`

module.exports = Node;