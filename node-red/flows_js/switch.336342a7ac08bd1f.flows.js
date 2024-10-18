const Node = {
  "id": "336342a7ac08bd1f",
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
  "y": 1040,
  "wires": [
    [
      "eb7b7449d004ec78"
    ]
  ],
  "l": false
}

module.exports = Node;