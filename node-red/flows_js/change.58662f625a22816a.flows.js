const Node = {
  "id": "58662f625a22816a",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Hent params",
  "rules": [
    {
      "t": "set",
      "p": "uid",
      "pt": "msg",
      "to": "req.params.uid",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 960,
  "wires": [
    [
      "cf91229f325e4297"
    ]
  ]
}

module.exports = Node;