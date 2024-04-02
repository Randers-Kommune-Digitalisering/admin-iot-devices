const Node = {
  "id": "088ddfc8df3e9919",
  "type": "template",
  "z": "dc028cb1b3d1491a",
  "name": "Forespørgsel ↓\\n Træk sensordata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 270,
  "y": 1300,
  "wires": [
    [
      "7b2c2cad72ca6709"
    ]
  ]
}

Node.template = `
SELECT * FROM os2iot_{{sensorId}} {{{limit}}}
`

module.exports = Node;