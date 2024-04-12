const Node = {
  "id": "8141e559b50ab054",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "901a8796f39b5fb8",
  "name": "SQL values",
  "rules": [
    {
      "t": "set",
      "p": "values",
      "pt": "msg",
      "to": "decoders @ $item . \t(\t    \"(\" & $item.id & \", '\" & $item.name & \"')\"\t)\t ~> $join(\", \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 2060,
  "wires": [
    [
      "4e2d7268111370eb"
    ]
  ]
}

module.exports = Node;