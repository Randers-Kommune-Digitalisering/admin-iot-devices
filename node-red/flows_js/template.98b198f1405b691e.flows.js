const Node = {
  "id": "98b198f1405b691e",
  "type": "template",
  "z": "330fa4345482a521",
  "name": "Forespørgsel ↓\\n Træk devicedata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 190,
  "y": 680,
  "wires": [
    [
      "937ba6b582d01e95"
    ]
  ]
}

Node.template = `
SELECT * FROM os2iot_{{deviceId}} {{{limit}}}
`

module.exports = Node;