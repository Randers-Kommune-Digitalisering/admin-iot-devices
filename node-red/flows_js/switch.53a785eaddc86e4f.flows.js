const Node = {
  "id": "53a785eaddc86e4f",
  "type": "switch",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "",
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
  "x": 310,
  "y": 2600,
  "wires": [
    [
      "92587c9a2926fa2c"
    ]
  ]
}

module.exports = Node;