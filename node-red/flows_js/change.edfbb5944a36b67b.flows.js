const Node = {
  "id": "edfbb5944a36b67b",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "data.lastObservation",
      "pt": "msg",
      "to": "payload[0].lastObservation",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 960,
  "y": 1880,
  "wires": [
    [
      "bb3e64bf0841a65c"
    ]
  ]
}

module.exports = Node;