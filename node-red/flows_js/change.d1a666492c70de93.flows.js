const Node = {
  "id": "d1a666492c70de93",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Sæt device profil id",
  "rules": [
    {
      "t": "set",
      "p": "data.deviceProfileUid",
      "pt": "msg",
      "to": "payload[0].os2uid",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "move",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1630,
  "y": 860,
  "wires": [
    [
      "61be1130af410857"
    ]
  ]
}

module.exports = Node;