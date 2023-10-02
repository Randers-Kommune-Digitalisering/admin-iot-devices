const Node = {
  "id": "8a24b20598152164",
  "type": "change",
  "z": "6f89a22d2f227f45",
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
      "548ebee0f6759b73"
    ]
  ],
  "_order": 41
}

module.exports = Node;