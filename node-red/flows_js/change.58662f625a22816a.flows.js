const Node = {
  "id": "58662f625a22816a",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Hent params",
  "rules": [
    {
      "t": "set",
      "p": "deviceUid",
      "pt": "msg",
      "to": "req.params.device",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "deviceUid",
      "pt": "msg",
      "to": "deviceUid ~> $replace(\"-\", \"_\")",
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
  "y": 1020,
  "wires": [
    [
      "ddacbe17945e9217"
    ]
  ]
}

module.exports = Node;