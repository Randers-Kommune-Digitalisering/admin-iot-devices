const Node = {
  "id": "75e1c5bfa7748cad",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
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
      "t": "move",
      "p": "unit",
      "pt": "msg",
      "to": "payload.unit",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1380,
  "y": 2460,
  "wires": [
    [
      "d716c7114d485aef",
      "f6c00f8410763722"
    ]
  ]
}

module.exports = Node;