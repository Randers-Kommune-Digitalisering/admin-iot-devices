const Node = {
  "id": "d96bef7de2633ebd",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
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
  "x": 1380,
  "y": 2620,
  "wires": [
    [
      "1e6f41a409d134e7",
      "a53b5c9091505909"
    ]
  ]
}

module.exports = Node;