const Node = {
  "id": "0e70e8d0d18cc60a",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $count() = 0 ? \"true\" : \"false\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1400,
  "y": 540,
  "wires": [
    [
      "876a3d6e29056d9b",
      "8c569dcc1ae44d3d"
    ]
  ]
}

module.exports = Node;