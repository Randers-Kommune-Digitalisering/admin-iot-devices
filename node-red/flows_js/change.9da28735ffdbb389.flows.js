const Node = {
  "id": "9da28735ffdbb389",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
  "name": "Udpak array",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[0]",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "name",
      "pt": "msg",
      "to": "payload.name",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "unit",
      "pt": "msg",
      "to": "payload.unit",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "startUnit",
      "pt": "msg",
      "to": "payload.startUnit",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "pulsEnhedRatio",
      "pt": "msg",
      "to": "payload.pulsEnhedRatio",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 2680,
  "wires": [
    [
      "d1d2a41e32fa6523",
      "10dc50a304863372"
    ]
  ]
}

module.exports = Node;