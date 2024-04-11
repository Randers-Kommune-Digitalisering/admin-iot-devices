const Node = {
  "id": "bba5e0c1b3e249b2",
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
  "y": 780,
  "wires": [
    [
      "cd466d2f807efc62"
    ]
  ]
}

module.exports = Node;