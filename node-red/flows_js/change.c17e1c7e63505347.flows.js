const Node = {
  "id": "c17e1c7e63505347",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Sæt os2uid",
  "rules": [
    {
      "t": "set",
      "p": "data.os2uid",
      "pt": "msg",
      "to": "payload.os2uid",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 1120,
  "wires": [
    [
      "e8b10291b2fa1081"
    ]
  ]
}

module.exports = Node;