const Node = {
  "id": "10816430a0b76bad",
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
  "x": 1360,
  "y": 1660,
  "wires": [
    [
      "ab28fd7e70bf721e"
    ],
    [
      "c49dfebb3f4eda7d"
    ]
  ]
}

module.exports = Node;