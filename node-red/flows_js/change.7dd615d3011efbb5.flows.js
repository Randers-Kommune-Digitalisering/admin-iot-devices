const Node = {
  "id": "7dd615d3011efbb5",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "sæt controlledProperty",
  "rules": [
    {
      "t": "set",
      "p": "payload.controlledProperty",
      "pt": "msg",
      "to": "($globalContext(\"controlledProperties\"))[energyTypeUid = $$.payload.energiartskode].propertyName",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 1840,
  "wires": [
    [
      "bbdb7f36cd11a351"
    ]
  ]
}

module.exports = Node;