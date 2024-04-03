const Node = {
  "id": "70386a9120489dad",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Hent params",
  "rules": [
    {
      "t": "set",
      "p": "deviceId",
      "pt": "msg",
      "to": "req.params.device",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "deviceId",
      "pt": "msg",
      "to": "deviceId ~> $replace(\"-\", \"_\")",
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
  "y": 1140,
  "wires": [
    [
      "7b18030175cb6d72"
    ]
  ]
}

module.exports = Node;