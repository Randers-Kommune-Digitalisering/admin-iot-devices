const Node = {
  "id": "a7378fc2aea88774",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 2620,
  "wires": [
    [
      "10aba16c20afe8d3",
      "59a9a10e9af5a808"
    ]
  ]
}

module.exports = Node;