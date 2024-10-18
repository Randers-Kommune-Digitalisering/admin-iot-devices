const Node = {
  "id": "e60e01a95f2423db",
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
  "x": 255,
  "y": 700,
  "wires": [
    [
      "de0820800c17b1dd"
    ]
  ],
  "l": false
}

module.exports = Node;