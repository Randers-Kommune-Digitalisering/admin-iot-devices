const Node = {
  "id": "7e24c50a5952b22e",
  "type": "switch",
  "z": "5f6ef472b7d9e1e9",
  "d": true,
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
  "x": 540,
  "y": 100,
  "wires": [
    [
      "931111495e1492e5"
    ],
    [
      "bb77ec718729db19"
    ]
  ]
}

module.exports = Node;