const Node = {
  "id": "61400c0183c441fe",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Gem ID",
  "rules": [
    {
      "t": "set",
      "p": "insertId",
      "pt": "msg",
      "to": "payload.insertId",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1020,
  "y": 220,
  "wires": [
    [
      "b90f3ff9b31ff47f"
    ]
  ]
}

module.exports = Node;