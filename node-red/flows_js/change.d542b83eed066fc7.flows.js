const Node = {
  "id": "d542b83eed066fc7",
  "type": "change",
  "z": "bd0288d62c2263f6",
  "name": "Flyt payload \\n til msg.data",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 540,
  "wires": [
    [
      "ca2d11f0445fbbf0"
    ]
  ]
}

module.exports = Node;