const Node = {
  "id": "ea4f17499382e8ea",
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
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 500,
  "wires": [
    [
      "0d684f99b548d7fa"
    ]
  ]
}

module.exports = Node;