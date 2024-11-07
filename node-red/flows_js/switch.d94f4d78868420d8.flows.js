const Node = {
  "id": "d94f4d78868420d8",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
  "name": "Findes data?",
  "property": "payload.dataTablename",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nnull"
    },
    {
      "t": "null"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 630,
  "y": 2960,
  "wires": [
    [
      "10aba16c20afe8d3"
    ],
    [
      "8f61f3ac28fdbbea"
    ]
  ]
}

module.exports = Node;