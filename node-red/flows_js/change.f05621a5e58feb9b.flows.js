const Node = {
  "id": "f05621a5e58feb9b",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Params",
  "rules": [
    {
      "t": "set",
      "p": "uid",
      "pt": "msg",
      "to": "req.params.uid",
      "tot": "msg"
    },
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
  "x": 640,
  "y": 1240,
  "wires": [
    [
      "fe6e3b9ed6be8b8e"
    ]
  ]
}

module.exports = Node;