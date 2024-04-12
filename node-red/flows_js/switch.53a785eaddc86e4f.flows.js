const Node = {
  "id": "53a785eaddc86e4f",
  "type": "switch",
  "z": "b05183ed45071965",
  "g": "901a8796f39b5fb8",
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
  "y": 2200,
  "wires": [
    [
      "92587c9a2926fa2c"
    ]
  ]
}

module.exports = Node;