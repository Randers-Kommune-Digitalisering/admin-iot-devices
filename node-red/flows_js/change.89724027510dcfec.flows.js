const Node = {
  "id": "89724027510dcfec",
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
  "x": 500,
  "y": 300,
  "wires": [
    [
      "d9e1d43f3fe91821"
    ]
  ]
}

module.exports = Node;