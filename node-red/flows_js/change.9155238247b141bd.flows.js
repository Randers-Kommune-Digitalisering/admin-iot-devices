const Node = {
  "id": "9155238247b141bd",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Save request",
  "rules": [
    {
      "t": "set",
      "p": "requestBody",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 380,
  "wires": [
    [
      "89eb90d261faf829"
    ]
  ]
}

module.exports = Node;