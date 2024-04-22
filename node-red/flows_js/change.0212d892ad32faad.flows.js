const Node = {
  "id": "0212d892ad32faad",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Add tablename",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> | $ | { \t    \"dataTablename\": $$.tablename\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1160,
  "y": 1740,
  "wires": [
    [
      "10816430a0b76bad"
    ]
  ]
}

module.exports = Node;