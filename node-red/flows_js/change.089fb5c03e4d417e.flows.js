const Node = {
  "id": "089fb5c03e4d417e",
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
  "y": 900,
  "wires": [
    [
      "4aa0f6977ef717d5"
    ]
  ]
}

module.exports = Node;