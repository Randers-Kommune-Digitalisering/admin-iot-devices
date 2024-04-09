const Node = {
  "id": "97947878ff1392aa",
  "type": "switch",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Dev env?",
  "property": "payload.filename = undefined",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 180,
  "y": 240,
  "wires": [
    [
      "38cad9e74a3acf1a"
    ],
    [
      "66af143f3138bb43"
    ]
  ]
}

module.exports = Node;