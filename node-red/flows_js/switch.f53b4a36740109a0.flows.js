const Node = {
  "id": "f53b4a36740109a0",
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
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 560,
  "y": 80,
  "wires": [
    [
      "931111495e1492e5"
    ]
  ]
}

module.exports = Node;