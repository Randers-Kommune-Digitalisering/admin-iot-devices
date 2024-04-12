const Node = {
  "id": "2a61b5f48ec28244",
  "type": "switch",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Dev env?",
  "property": "DEV_ENV",
  "propertyType": "env",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "str"
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
      "66af143f3138bb43",
      "38cad9e74a3acf1a"
    ]
  ]
}

module.exports = Node;