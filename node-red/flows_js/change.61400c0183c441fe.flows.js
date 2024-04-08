const Node = {
  "id": "61400c0183c441fe",
  "type": "change",
  "z": "b05183ed45071965",
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
  "x": 980,
  "y": 120,
  "wires": [
    [
      "e315ec4a052f9b98"
    ]
  ]
}

module.exports = Node;