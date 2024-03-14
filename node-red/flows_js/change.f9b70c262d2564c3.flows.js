const Node = {
  "id": "f9b70c262d2564c3",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Params",
  "rules": [
    {
      "t": "set",
      "p": "devUid",
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
  "x": 520,
  "y": 580,
  "wires": [
    [
      "e998ee9e20b70593"
    ]
  ]
}

module.exports = Node;