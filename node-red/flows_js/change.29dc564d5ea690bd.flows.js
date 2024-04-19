const Node = {
  "id": "29dc564d5ea690bd",
  "type": "change",
  "z": "e4e3eef16c2dc327",
  "name": "Flyt msg.data \\n til payload",
  "rules": [
    {
      "t": "move",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $type() = \"Array\" ?\t    payload\t:   [payload]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 400,
  "wires": [
    [
      "5729fbd831fd49cf"
    ]
  ]
}

module.exports = Node;