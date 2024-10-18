const Node = {
  "id": "fddf9628290ca36a",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Select lastObservation \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 500,
  "y": 1840,
  "wires": [
    [
      "7943a27a212c5dad"
    ]
  ]
}

Node.template = `
SELECT DATE_FORMAT(MAX(observedAt), '%Y-%m-%dT%H:%i:%s.000Z') as lastObservation FROM {{payload.dataTablename}} WHERE type = '{{payload.propertyName}}'
`

module.exports = Node;