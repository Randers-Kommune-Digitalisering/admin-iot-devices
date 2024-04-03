const Node = {
  "id": "9670b2c8ae7ff284",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "list unit names",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.abbr",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 580,
  "y": 980,
  "wires": [
    [
      "b2887d435b12c492"
    ]
  ]
}

module.exports = Node;