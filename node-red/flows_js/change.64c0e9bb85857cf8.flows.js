const Node = {
  "id": "64c0e9bb85857cf8",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Params",
  "rules": [
    {
      "t": "set",
      "p": "deviceUid",
      "pt": "msg",
      "to": "req.params.device",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 1220,
  "wires": [
    [
      "95bceccfcb8808ea"
    ]
  ]
}

module.exports = Node;