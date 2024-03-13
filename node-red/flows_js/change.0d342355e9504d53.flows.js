const Node = {
  "id": "0d342355e9504d53",
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
  "x": 710,
  "y": 120,
  "wires": [
    [
      "6f5d5b5c9388d80a",
      "88ac82c4449d7f55"
    ]
  ]
}

module.exports = Node;