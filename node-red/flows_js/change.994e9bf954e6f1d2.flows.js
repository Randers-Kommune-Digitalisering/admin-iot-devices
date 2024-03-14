const Node = {
  "id": "994e9bf954e6f1d2",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Params",
  "rules": [
    {
      "t": "set",
      "p": "uid",
      "pt": "msg",
      "to": "req.params.template",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 440,
  "wires": [
    [
      "c674c0ce75e712fb"
    ]
  ]
}

module.exports = Node;