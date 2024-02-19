const Node = {
  "id": "98b198f1405b691e",
  "type": "template",
  "z": "330fa4345482a521",
  "name": "Forespørgsel ↓\\n Træk sensordata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 580,
  "wires": [
    [
      "937ba6b582d01e95",
      "0e0bcd48c48c2eef"
    ]
  ]
}

Node.template = `
SELECT * FROM os2iot_{{sensorId}} {{{limit}}}
`

module.exports = Node;