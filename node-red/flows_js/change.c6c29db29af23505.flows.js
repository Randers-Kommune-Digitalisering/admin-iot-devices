const Node = {
  "id": "c6c29db29af23505",
  "type": "change",
  "z": "e4e3eef16c2dc327",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[0].lastObservation",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$toMillis(payload)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 320,
  "y": 1000,
  "wires": [
    [
      "315ae566efa6cdb6"
    ]
  ]
}

module.exports = Node;