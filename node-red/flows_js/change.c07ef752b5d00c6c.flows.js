const Node = {
  "id": "c07ef752b5d00c6c",
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
  "x": 690,
  "y": 180,
  "wires": [
    [
      "85a5d37bea57fc4b",
      "35442c093b3cfcfb"
    ]
  ]
}

module.exports = Node;