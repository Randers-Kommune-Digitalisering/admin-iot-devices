const Node = {
  "id": "5bf9079e2b3dbf39",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Sæt device profil id",
  "rules": [
    {
      "t": "set",
      "p": "data.deviceProfileOs2Uid",
      "pt": "msg",
      "to": "payload[0].deviceProfileUid",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1310,
  "y": 700,
  "wires": [
    [
      "7fd797532defa797"
    ]
  ]
}

module.exports = Node;