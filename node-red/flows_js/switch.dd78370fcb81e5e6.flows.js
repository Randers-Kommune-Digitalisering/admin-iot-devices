const Node = {
  "id": "dd78370fcb81e5e6",
  "type": "switch",
  "z": "b05183ed45071965",
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
  "x": 200,
  "y": 440,
  "wires": [
    [
      "d7176a3ceefe889e"
    ]
  ]
}

module.exports = Node;