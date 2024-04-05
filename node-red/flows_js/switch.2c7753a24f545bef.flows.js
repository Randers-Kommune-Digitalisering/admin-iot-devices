const Node = {
  "id": "2c7753a24f545bef",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "name": "Findes måler?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 840,
  "y": 2160,
  "wires": [
    [
      "2820a5142186ab15"
    ],
    [
      "25075e5bbe559208",
      "0e82e324774036f4"
    ]
  ]
}

module.exports = Node;