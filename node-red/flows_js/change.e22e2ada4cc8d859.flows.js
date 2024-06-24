const Node = {
  "id": "e22e2ada4cc8d859",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"Content-Disposition\": \"attachment;filename=\" & req.params.device & \".\" & req.params.format\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 505,
  "y": 1140,
  "wires": [
    [
      "58662f625a22816a"
    ]
  ],
  "l": false
}

module.exports = Node;