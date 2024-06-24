const Node = {
  "id": "389ea2dae92c57bb",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "SQL values",
  "rules": [
    {
      "t": "set",
      "p": "values",
      "pt": "msg",
      "to": "profiles @ $item . \t(\t    \"('\" & $item.id & \"', '\" & $item.name & \"')\"\t)\t ~> $join(\", \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 2840,
  "wires": [
    [
      "bf1fd01ce6340a14"
    ]
  ]
}

module.exports = Node;