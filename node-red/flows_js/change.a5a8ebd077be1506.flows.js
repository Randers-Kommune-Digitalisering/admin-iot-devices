const Node = {
  "id": "a5a8ebd077be1506",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Params",
  "rules": [
    {
      "t": "set",
      "p": "uid",
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
  "y": 500,
  "wires": [
    [
      "e09e7f3ae0b6e0ad"
    ]
  ]
}

module.exports = Node;