const Node = {
  "id": "b9ad25403ee9c9c1",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Udpak array",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $type() = \"array\" ? payload[0] : payload",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 1600,
  "wires": [
    [
      "906af68b5aaec25a",
      "def8ad69708258c8"
    ]
  ]
}

module.exports = Node;