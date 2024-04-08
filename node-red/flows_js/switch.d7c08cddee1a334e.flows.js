const Node = {
  "id": "d7c08cddee1a334e",
  "type": "switch",
  "z": "b05183ed45071965",
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
  "x": 330,
  "y": 740,
  "wires": [
    [
      "2596f518255035c3"
    ]
  ]
}

module.exports = Node;