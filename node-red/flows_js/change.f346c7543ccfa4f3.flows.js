const Node = {
  "id": "f346c7543ccfa4f3",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"Content-Disposition\": \"attachment;filename=\" & req.params.device & \".\" & req.params.format\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 465,
  "y": 1180,
  "wires": [
    [
      "70386a9120489dad"
    ]
  ],
  "l": false
}

module.exports = Node;