const Node = {
  "id": "f05621a5e58feb9b",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Hent params",
  "rules": [
    {
      "t": "set",
      "p": "uid",
      "pt": "msg",
      "to": "req.params.uid",
      "tot": "msg"
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
      "fe6e3b9ed6be8b8e"
    ]
  ]
}

module.exports = Node;