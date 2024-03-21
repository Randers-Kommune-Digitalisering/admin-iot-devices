const Node = {
  "id": "f9b70c262d2564c3",
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
  "x": 480,
  "y": 1000,
  "wires": [
    [
      "e998ee9e20b70593"
    ]
  ]
}

module.exports = Node;