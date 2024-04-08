const Node = {
  "id": "c49dfebb3f4eda7d",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Findes data?",
  "property": "payload[0].dataTablename",
  "propertyType": "msg",
  "rules": [
    {
      "t": "null"
    },
    {
      "t": "nnull"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1350,
  "y": 1660,
  "wires": [
    [
      "ab28fd7e70bf721e"
    ],
    [
      "2e76629a4d8e56b3"
    ]
  ]
}

module.exports = Node;