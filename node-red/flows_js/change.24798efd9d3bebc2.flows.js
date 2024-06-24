const Node = {
  "id": "24798efd9d3bebc2",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Params",
  "rules": [
    {
      "t": "set",
      "p": "devEui",
      "pt": "msg",
      "to": "req.params.eui",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 1640,
  "wires": [
    [
      "04f45f839debe924"
    ]
  ]
}

module.exports = Node;