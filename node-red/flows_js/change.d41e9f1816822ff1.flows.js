const Node = {
  "id": "d41e9f1816822ff1",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "SQL values",
  "rules": [
    {
      "t": "set",
      "p": "values",
      "pt": "msg",
      "to": "deletedItems @ $item . \t(\t    \"uid = \" & $item.uid\t)\t ~> $join(\" OR \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 2400,
  "wires": [
    [
      "6c0fda8e720a9a4d"
    ]
  ]
}

module.exports = Node;