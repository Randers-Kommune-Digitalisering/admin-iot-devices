const Node = {
  "id": "c0c67c25fdb33e3c",
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
  "y": 1960,
  "wires": [
    [
      "4973b1d8feb7397e"
    ]
  ]
}

module.exports = Node;