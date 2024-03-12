const Node = {
  "id": "ba656a256a10f07e",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Params",
  "rules": [
    {
      "t": "set",
      "p": "uid",
      "pt": "msg",
      "to": "req.params.device",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 180,
  "wires": [
    [
      "02a6a77497d41701"
    ]
  ]
}

module.exports = Node;