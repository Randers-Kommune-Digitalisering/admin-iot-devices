const Node = {
  "id": "a6e46e2260941a9a",
  "type": "template",
  "z": "330fa4345482a521",
  "name": "Forespørgsel ↓\\n Træk tabeldata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 800,
  "y": 900,
  "wires": [
    [
      "d734769d19f27404"
    ]
  ]
}

Node.template = `
SELECT DISTINCT type FROM os2iot_{{deviceId}}
`

module.exports = Node;