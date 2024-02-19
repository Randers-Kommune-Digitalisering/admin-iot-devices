const Node = {
  "id": "c8ac74761feddde4",
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
  "y": 340,
  "wires": [
    [
      "e948f5e84d5f8c72"
    ]
  ]
}

module.exports = Node;