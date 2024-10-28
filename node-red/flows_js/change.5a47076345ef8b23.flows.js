const Node = {
  "id": "5a47076345ef8b23",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Rens measurementPoints",
  "rules": [
    {
      "t": "set",
      "p": "measurementPoints",
      "pt": "msg",
      "to": "measurementPoints[name in ($$.payload ~> $keys())]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 830,
  "y": 880,
  "wires": [
    [
      "09eb3dddb876f470"
    ]
  ]
}

module.exports = Node;