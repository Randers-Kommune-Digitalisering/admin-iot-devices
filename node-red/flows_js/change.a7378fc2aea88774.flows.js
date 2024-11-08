const Node = {
  "id": "a7378fc2aea88774",
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
    },
    {
      "t": "set",
      "p": "observedAtQuery",
      "pt": "msg",
      "to": "\"observedAt > '\" & payload.lastExport & \"'\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 2920,
  "wires": [
    [
      "d94f4d78868420d8"
    ]
  ]
}

module.exports = Node;