const Node = {
  "id": "d7c08cddee1a334e",
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
  "y": 1420,
  "wires": [
    [
      "2596f518255035c3"
    ]
  ]
}

module.exports = Node;