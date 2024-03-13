const Node = {
  "id": "a338e348226e06a1",
  "type": "change",
  "z": "bd0288d62c2263f6",
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
  "x": 240,
  "y": 340,
  "wires": [
    [
      "91934ec53ff05377"
    ]
  ]
}

module.exports = Node;