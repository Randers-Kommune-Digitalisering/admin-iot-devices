const Node = {
  "id": "d96bef7de2633ebd",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
  "name": "Indsæt værdier",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $ | {\t    \"type\": $$.name,\t    \"unit\": $$.unit\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1260,
  "y": 2820,
  "wires": [
    [
      "8c41b7221f7be74e"
    ]
  ]
}

module.exports = Node;