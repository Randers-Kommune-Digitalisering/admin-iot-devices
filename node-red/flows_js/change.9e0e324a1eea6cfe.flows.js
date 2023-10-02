const Node = {
  "id": "9e0e324a1eea6cfe",
  "type": "change",
  "z": "6f89a22d2f227f45",
  "name": "Flyt msg.data \\n til payload",
  "rules": [
    {
      "t": "move",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 540,
  "wires": [
    [
      "66728d57c2139a47"
    ]
  ],
  "_order": 39
}

module.exports = Node;