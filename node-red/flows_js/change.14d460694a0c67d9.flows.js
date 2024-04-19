const Node = {
  "id": "14d460694a0c67d9",
  "type": "change",
  "z": "e4e3eef16c2dc327",
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
  "x": 590,
  "y": 400,
  "wires": [
    [
      "d777f05af45874ee"
    ]
  ]
}

module.exports = Node;