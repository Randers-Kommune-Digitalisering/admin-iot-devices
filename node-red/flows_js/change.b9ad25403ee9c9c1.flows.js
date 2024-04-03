const Node = {
  "id": "b9ad25403ee9c9c1",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "Udpak array",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[0]",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 1520,
  "wires": [
    [
      "906af68b5aaec25a",
      "def8ad69708258c8"
    ]
  ]
}

module.exports = Node;