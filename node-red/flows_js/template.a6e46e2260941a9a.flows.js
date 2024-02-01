const Node = {
  "id": "a6e46e2260941a9a",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Træk tabeldata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 780,
  "y": 600,
  "wires": [
    [
      "d734769d19f27404"
    ]
  ]
}

Node.template = `
SELECT DISTINCT type FROM os2iot_{{sensorId}}
`

module.exports = Node;