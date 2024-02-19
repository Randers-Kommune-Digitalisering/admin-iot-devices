const Node = {
  "id": "e185c748f4327fed",
  "type": "change",
  "z": "330fa4345482a521",
  "name": "Hent params",
  "rules": [
    {
      "t": "set",
      "p": "sensorId",
      "pt": "msg",
      "to": "req.params.sensor",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "sensorId",
      "pt": "msg",
      "to": "sensorId ~> $replace(\"-\", \"_\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "format",
      "pt": "msg",
      "to": "req.params.format",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 780,
  "wires": [
    [
      "a6e46e2260941a9a"
    ]
  ]
}

module.exports = Node;