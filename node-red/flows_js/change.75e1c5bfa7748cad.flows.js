const Node = {
  "id": "75e1c5bfa7748cad",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
  "name": "Udpak array \\n Indsæt værdier",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[0]",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "name",
      "pt": "msg",
      "to": "payload.type",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.unit",
      "pt": "msg",
      "to": "unit",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1260,
  "y": 2420,
  "wires": [
    [
      "092bb2335c5632fd"
    ]
  ]
}

module.exports = Node;