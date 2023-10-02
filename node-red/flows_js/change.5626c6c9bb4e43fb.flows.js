const Node = {
  "id": "5626c6c9bb4e43fb",
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
  "x": 750,
  "y": 120,
  "wires": [
    [
      "7bad56e36ab88cbb",
      "ca7192529d4aa8d2"
    ]
  ],
  "_order": 34
}

module.exports = Node;