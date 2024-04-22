const Node = {
  "id": "5224f6ac5429371d",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "g": "d3309108f1a755b6",
  "name": "Findes data?",
  "property": "payload.dataTablename",
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
  "x": 330,
  "y": 2340,
  "wires": [
    [
      "3f05bd7a15304b43"
    ],
    [
      "ebf6784601e91c48"
    ]
  ]
}

module.exports = Node;