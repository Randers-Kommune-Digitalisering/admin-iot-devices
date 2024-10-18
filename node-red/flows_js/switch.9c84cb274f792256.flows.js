const Node = {
  "id": "9c84cb274f792256",
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
  "x": 265,
  "y": 1380,
  "wires": [
    [
      "81e3280d3829f2ea"
    ]
  ],
  "l": false
}

module.exports = Node;