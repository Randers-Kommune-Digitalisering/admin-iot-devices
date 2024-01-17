const Node = {
  "id": "98b198f1405b691e",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Træk sensordata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 170,
  "y": 340,
  "wires": [
    [
      "937ba6b582d01e95"
    ]
  ]
}

Node.template = `
SELECT * FROM os2iot_{{sensorId}}
`

module.exports = Node;