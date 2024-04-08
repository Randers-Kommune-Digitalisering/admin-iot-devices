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
      "to": "payload[0] ~> $exists() ?\tpayload[0] : {}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 1480,
  "wires": [
    [
      "906af68b5aaec25a",
      "def8ad69708258c8"
    ]
  ]
}

module.exports = Node;