const Node = {
  "id": "c60657ac38144114",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "d3309108f1a755b6",
  "name": "Objekt -> liste",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[payload.type]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 840,
  "y": 2360,
  "wires": [
    [
      "2820a5142186ab15",
      "4d04d39bdb3280cf"
    ]
  ]
}

module.exports = Node;