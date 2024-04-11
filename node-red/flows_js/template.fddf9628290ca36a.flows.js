const Node = {
  "id": "fddf9628290ca36a",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Select templateUid \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 1840,
  "wires": [
    [
      "d91e063fde531332"
    ]
  ]
}

Node.template = `
SELECT MAX(observedAt) as lastObservation FROM {{payload.dataTablename}} WHERE type = '{{payload.propertyName}}'
`

module.exports = Node;